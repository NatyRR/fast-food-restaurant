import { ProductDataType } from "@/types/shoppingCart";
import { UserDataType } from "@/types/user";
import { Accordion, AccordionTab } from "primereact/accordion";
import { FC } from "react";

import {
  CalendarEvent,
  Cart4,
  CashCoin,
  Person,
  Truck,
} from "react-bootstrap-icons";
import classes from "@/styles/organisms/orders/orderCard.module.scss";
import { order } from "../admin/utils";

type CardAdminProps = {
  id: number;
  createdAt: string;
  userName: UserDataType;
  address: string;
  products: ProductDataType[];
};

export const OrdersCard: FC<CardAdminProps> = ({
  id,
  createdAt,
  userName,
  address,
  products,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.id}>
        <div className={classes.header}>
          <div className={classes.order_id}>
            <span>#:</span>
            <span>{id}</span>
          </div>

          <div className={classes.status}>
            <div className={classes.check}></div>
          </div>
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.info_user}>
        <div className={classes.user}>
          <Person />
          <span>{userName.name}</span>
        </div>
        <div className={classes.created_at}>
          <CalendarEvent />
          <span>{createdAt}</span>
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
        <div>
          <Accordion activeIndex={0} className={classes.acordion}>
            <AccordionTab header="Estatus de orden">
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
