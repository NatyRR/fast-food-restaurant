import React, { useState } from 'react';
import { FC } from 'react';
import classes from '@/styles/molecules/card-admin/cardAdmin.module.scss';

import { Accordion, AccordionTab } from 'primereact/accordion';
import {
  Cart4,
  CashCoin,
  HourglassSplit,
  Person,
  Truck,
} from 'react-bootstrap-icons';
import { UserDataType } from '../../types/user';
import { ProductDataType } from '../../types/shoppingCart';
import { InvoiceDataType } from '../../types/invoice';
import {
  order,
  statusInvoiceOptions,
  statusOrder,
} from '../organisms/admin/utils';
import { Dropdown } from 'primereact/dropdown';

type CardAdminProps = {
  id: number;
  status: string;
  address: string;
  userName: UserDataType;
  invoice: InvoiceDataType;
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
  const [orderStatus, setOrderStatus] = useState(status);
  const [StatuInvoice, setStatusInvoice] = useState(invoice.status);
  return (
    <div className={classes.card}>
      <div className={classes.id}>
        <div className={classes.header}>
          <div className={classes.order_id}>
            <span>#</span>
            <span>{id}</span>
            <Dropdown
              value={StatuInvoice}
              placeholder='Estatus pago'
              className={classes.dropdown}
              options={statusInvoiceOptions}
              onChange={(e) => setStatusInvoice(e.value)}
            />
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
        <div className={classes.total}>
          <CashCoin />
          <span>{order.invoice.total}</span>
        </div>
        <div className={classes.direccion}>
          <Truck />
          <span>{address}</span>
        </div>

        <div className={classes.dropdown_container}>
          <HourglassSplit />
          <Dropdown
            value={orderStatus}
            options={statusOrder}
            placeholder='Estatus'
            className={classes.dropdown}
            onChange={(e) => setOrderStatus(e.value)}
          />
        </div>
      </div>
      <div className={classes.status_order}>
        <div>
          <Accordion activeIndex={0} className={classes.acordion}>
            <AccordionTab header='Pedido'>
              <div className={classes.icon}>
                <Cart4 />
                <span>Lista</span>
              </div>
              <div className={classes.orderList}>
                {products.map((item) => (
                  <div className={classes.product} key={id}>
                    <span>{item.name}</span>
                    <span>{item.flavor}</span>
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
