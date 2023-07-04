import { FC } from "react";
import classes from "@/styles/molecules/Layout/layout.module.scss";
import Head from "next/head";
import { Navbar } from "../navbar/Navbar";

interface Layoutprops {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Layoutprops> = ({
  title = "Fact Food Restaurand",
  children,
}) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={classes.content}>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
