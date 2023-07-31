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
  ClipboardCheck,
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
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import axiosClient from '@/lib/axios';
import { endpoints } from '@/utils/fetch';
import { useApp } from '@/hooks/useApp';
import { OrderDataType } from '@/types/order';

interface CardAdminProps extends OrderDataType {
  handleRefecht: () => Promise<void>;
}

export const CardAdmin: FC<CardAdminProps> = ({
  id,
  User,
  status,
  Invoice,
  address,
  OrderItems,
  handleRefecht,
}) => {
  const { toast } = useApp();
  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState(status);
  const [statuInvoice, setStatusInvoice] = useState(Invoice?.status);

  const updateOrder = async () => {
    const body = {
      id: id,
      orderStatus,
      invoiceStatus: statuInvoice,
    };

    setLoading(true);
    const instance = axiosClient();
    const { data, status } = await instance.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.updateInvoiceOrderStatus}`,
      body
    );
    console.log('🚀 ~ file: CardAdmin.tsx:55 ~ updateOrder ~ status:', status);

    if (status > 200) {
      toast()?.show({
        severity: 'success',
        summary: 'Orden procesada',
        detail: 'Su orden ha sido actualizada con exito',
      });
      handleRefecht();
      setLoading(false);
      return;
    }

    setLoading(false);
    toast()?.show({
      severity: 'error',
      summary: 'Error',
      detail: 'Ocurrio un error al actualizar la orden',
    });
  };

  return (
    <div className={classes.card}>
      <div className={classes.id}>
        <div className={classes.header}>
          <div className={classes.order_id}>
            <span>#</span>
            <span>{id}</span>
          </div>

          <div className={classes.status}>
            <Dropdown
              value={statuInvoice}
              placeholder='Estatus pago'
              className={classes.dropdown}
              options={statusInvoiceOptions}
              onChange={(e) => setStatusInvoice(e.value)}
            />
          </div>
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.info_user}>
        <div className={classes.user}>
          <Person />
          <span>{User?.name}</span>
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
        <Accordion className={classes.acordion}>
          <AccordionTab header='Pedido'>
            <div className={classes.icon}>
              <Cart4 />
              <span>Lista</span>
            </div>
            <div className={classes.orderList}>
              {OrderItems?.map((item) => (
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

      <Row className='my-2 justify-content-center px-3'>
        <Col xs={12} md={8}>
          <Button
            onClick={updateOrder}
            className={classes.button_naranja}
            disabled={
              (orderStatus === status && statuInvoice === Invoice?.status) ||
              loading
            }
          >
            {loading ? (
              <Spinner animation='border' variant='light' />
            ) : (
              'Actualizar datos'
            )}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
