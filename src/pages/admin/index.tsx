// main tools
import { getServerAuthSession } from '../api/auth/[...nextauth]';

// components
import { AdminLayout } from '@/components/molecules/Layout/AdminLayout';
import { AdminPage } from '@/components/organisms/admin';

// provider
import { SocketContextProvider } from '@/context/io/provdier';

// types
import { GetServerSidePropsContext, NextPage } from 'next';
import { GetSSPropsType } from '@/types';

const Administrador: NextPage<
  GetSSPropsType<typeof getServerSideProps>
> = () => {
  return (
    <AdminLayout page='Pedidos'>
      <AdminPage />
    </AdminLayout>
    // <SocketContextProvider>
    // </SocketContextProvider>
  );
};

export default Administrador;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};
