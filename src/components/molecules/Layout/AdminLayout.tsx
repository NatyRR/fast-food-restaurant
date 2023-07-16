import Head from 'next/head';
import React from 'react';
import { FC } from 'react';
import classes from '@/styles/molecules/Layout/adminLayout.module.scss';
import { AdminNavbar } from '../navbar/AdminNavbar';

interface adminLayoutprops {
  page: string;
  title?: string;
  children: React.ReactNode;
}

export const AdminLayout: FC<adminLayoutprops> = ({
  page,
  children,
  title = 'Administrador',
}) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={classes.content}>
        <AdminNavbar page={page} />
        <main>{children}</main>
      </div>
    </div>
  );
};
