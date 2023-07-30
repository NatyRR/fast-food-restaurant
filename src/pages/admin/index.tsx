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
import axiosClient from '@/lib/axios';
import { endpoints } from '@/utils/fetch';

const Administrador: NextPage<GetSSPropsType<typeof getServerSideProps>> = ({
  data,
}) => {
  return (
    <AdminLayout page='Pedidos'>
      <AdminPage data={data} />
    </AdminLayout>
    // <SocketContextProvider>
    // </SocketContextProvider>
  );
};

export default Administrador;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queso = axiosClient(ctx);

  const { data, status } = await queso.get(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoints.getAllorders}`
  );

  return {
    props: {
      data: status === 200 ? data : null,
    },
  };
};
