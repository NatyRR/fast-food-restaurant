import Head from "next/head";
import React from "react";
import { FC } from "react";
import classes from "@/styles/molecules/Layout/adminLayout.module.scss";

interface adminLayoutprops {
  title?: string;
  children: React.ReactNode;
}

export const AdminLayout: FC<adminLayoutprops> = ({
  title = "Administrador",
  children,
}) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={classes.content}>
        <main>{children}</main>
      </div>
    </div>
  );
};
