import { getServerAuthSession } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

const axiosClient = (ctx?: GetServerSidePropsContext) => {
  const instance = axios.create();
  instance.interceptors.request.use(async (request) => {
    const session =
      typeof window !== 'undefined'
        ? await getSession()
        : await getServerAuthSession(ctx!);
    if (session) {
      request.headers.Authorization = `Bearer ${session.at}`;
    }

    return request;
  });

  return instance;
};

export default axiosClient;

export const axiosAuthServer = (token: string) => {
  const instance = axios.create();
  instance.interceptors.request.use(async (request) => {
    request.headers.Authorization = `Bearer ${token}`;

    return request;
  });

  return instance;
};
