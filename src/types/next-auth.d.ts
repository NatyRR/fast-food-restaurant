import 'next-auth';

declare module 'next-auth' {
  export interface User {
    at?: string;
    id?: number;
    role?: string;
    email?: string;
  }

  export interface Session {
    at?: string;
    user: User;
  }
}

declare module 'next-auth/jwt' {
  export interface JWT {
    at?: string;
  }
}
