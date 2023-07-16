import React, { useState } from "react";
import { FC } from "react";
import classes from "@/styles/molecules/card-admin/cardAdmin.module.scss";
import { Checkbox } from "primereact/checkbox";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Cart4, CashCoin, Person, Truck } from "react-bootstrap-icons";
import { UserDataType } from "../../types/user";
import { ProductDataType } from "../../types/shoppingCart";
import { InvoiceDataType } from "../../types/invoice";
import { order, orders } from "../organisms/admin/utils";

type CardAdminProps = {
  id: number;
  status: string;
  userName: UserDataType;
  invoice: InvoiceDataType;
  address: string;
  products: ProductDataType[];
};

export const CardAdmin: FC<CardAdminProps> = ({
  id,
  status,
  userName,
  invoice,
  address,
  products,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={classes.card}>
      <div className={classes.id}>
        <div className={classes.header}>
          <div className={classes.order_id}>
            <span>#:</span>
            <span>{id}</span>
          </div>

          <div className={classes.status}>
            <div className={classes.check}>
              <Checkbox
                onChange={(e) => setChecked(e.checked!)}
                checked={checked}
              ></Checkbox>

              <span>{status}</span>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.info_user}>
        <div className={classes.user}>
          <Person />
          <span>{userName.name}</span>
        </div>
        <div className={classes.total}>
          <CashCoin />
          <span>{order.invoice.total}</span>
        </div>
        <div className={classes.direccion}>
          <Truck />
          <span>{address}</span>
        </div>
      </div>
      <div className={classes.status_order}>
        <div className={classes.acordion}>
          <Accordion activeIndex={0}>
            <AccordionTab header="Status Order">
              <div className={classes.icon}>
                <Cart4 />
                <span>Pedido:</span>
              </div>
              <div className={classes.orderList}>
                {products.map((item, index) => (
                  <div className={classes.product} key={id}>
                    <span>{item.name}</span>
                    <span>{item.flaver}</span>
                    <span>{item.quantity}</span>
                  </div>
                ))}
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
