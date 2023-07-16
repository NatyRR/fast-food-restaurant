// main tools
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { getServerSession } from 'next-auth/next';
import jwtDecoder from 'jwt-decode';
import dayjs from 'dayjs';

// uitls
import { axiosAuthServer } from '@/lib/axios';

// type
import { GetServerSidePropsContext } from 'next';
import { NextAuthOptions } from 'next-auth';
import axios from 'axios';

export const authOptions: NextAuthOptions = {
  session: { maxAge: 60 * 60 }, // initial value in seconsd, logout on a half hour of inactivity
  secret: process.env.NEXTAUTH_SECRET, // secret for JWT
  pages: { signIn: '/login' }, // redirection url after signout

  providers: [
    /**
     * credentials provider
     */
    CredentialsProvider({
      id: 'signin',
      name: 'signin',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },

      /**
       * verify if the user is found in the backend
       *
       * @param credentials
       * @returns
       */
      async authorize(credentials) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-in`,
          { email: credentials?.email, password: credentials?.password }
        );
        if (data.at) return data;
        else return null;
      },
    }),

    /**
     * credentials provider
     */
    CredentialsProvider({
      id: 'signup',
      name: 'signup',
      credentials: {
        name: { type: 'text' },
        phone: { type: 'text' },
        email: { type: 'email' },
        address: { type: 'text' },
        password: { type: 'password' },
      },

      async authorize(credentials) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sign-up`,
          {
            name: credentials?.name,
            email: credentials?.email,
            phone: credentials?.phone,
            address: credentials?.address,
            password: credentials?.password,
          }
        );

        if (data.at) return data;
        else return null;
      },
    }),
  ],

  callbacks: {
    /**
     * @param token decrypted jwt
     * @param user user received after authorize method
     *
     * @return jwt that will be send to session callback
     */

    jwt: async ({ token, user }) => {
      if (user) token.at = user.at;

      return Promise.resolve({ ...token });
    },

    session: async ({ session, token }) => {
      session.at = token.at;
      const instance = axiosAuthServer(token.at!);
      const { data } = await instance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`
      );
      session.user = {
        id: data.id,
        name: data.name,
        role: data.role,
        email: data.email,
      };
      return session;
    },
  },
};

export const getServerAuthSession = (ctx: GetServerSidePropsContext) =>
  getServerSession(ctx.req, ctx.res, authOptions);

export default NextAuth(authOptions);
