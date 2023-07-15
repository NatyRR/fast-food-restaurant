import React from "react";
import { FC } from "react";
import classes from "@/styles/molecules/card-admin/cardAdmin.module.scss";

export const CardAdmin: FC = () => {
  return (
    <div className={classes.card}>
      <div className={classes.id}>
        <div className={classes.title_info}>
          <span>Orden numero:</span>
          <span>id</span>
        </div>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};
