import { ProductDataType } from '@/types/shoppingCart';
import { UserDataType } from '@/types/user';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FC } from 'react';

import {
  CalendarEvent,
  Cart4,
  CashCoin,
  HourglassSplit,
  Person,
  Truck,
} from 'react-bootstrap-icons';
import classes from '@/styles/organisms/orders/orderCard.module.scss';
import { order } from '../admin/utils';
import { OrderDataType } from '@/types/order';

interface CardAdminProps extends OrderDataType {}
export const OrdersCard: FC<CardAdminProps> = ({
  id,
  User,
  status,
  Invoice,
  address,
  orderId,
  createdAt,
  OrderItems,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.id}>
        <div className={classes.header}>
          <div className={classes.order_id}>
            <span>#</span>
            <span>{orderId}</span>
          </div>

          <div className={classes.status}>
            <span className={classes.check}>{Invoice?.status}</span>
          </div>
        </div>

        <div className={classes.line}></div>
      </div>

      <div className={classes.info_user}>
        <div className={classes.user}>
          <Person />
          <span>{User?.name}</span>
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
        <div className={classes.direccion}>
          <HourglassSplit />
          <span>{status}</span>
        </div>
      </div>

      {/* <div className={classes.status_order}>
        <Accordion activeIndex={0} className={classes.acordion}>
          <AccordionTab header={`Pedido`}>
            <div className={classes.icon}>
              <Cart4 />
              <span>Lista</span>
            </div>
            <div className={classes.orderList}>
              {OrderItems?.map((item, index) => (
                <div className={classes.product} key={id}>
                  <span>{item.name}</span>
                  <span>{item.flavor}</span>
                  <span>{item.quantity}</span>
                </div>
              ))}
            </div>
          </AccordionTab>
        </Accordion>
      </div> */}
    </div>
  );
};
