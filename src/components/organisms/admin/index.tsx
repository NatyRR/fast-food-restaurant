// main tools
import { FC, useEffect, useState } from 'react';

// components
import { FilterAdmin } from '@/components/atoms/FilterAdmin';
import { orders } from '@/components/organisms/admin/utils';
import { CardAdmin } from '@/components/atoms/CardAdmin';

// bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// hooks
import { useIo } from '@/hooks/useIo';

// styles
import classes from '@/styles/organisms/administrador/admin.module.scss';
import { OrderDataType } from '@/types/order';
import { Socket } from 'socket.io-client';
import { InvoiceStatusEnum } from '../../../common/enums';
import { endpoints } from '@/utils/fetch';
import axiosClient from '@/lib/axios';
import { useApp } from '@/hooks/useApp';

type AdminPageProps = {
  data: OrderDataType[] | null;
};

export const AdminPage: FC<AdminPageProps> = ({ data }) => {
  const { toast } = useApp();
  const [orderList, setorderList] = useState<OrderDataType[] | null>(data);
  const [filterData, setFilterData] = useState<
    keyof typeof InvoiceStatusEnum | undefined
  >('pending');

  const handleFilter = (filter: keyof typeof InvoiceStatusEnum) => {
    if (filterData === filter) setFilterData(undefined);
    else setFilterData(filter);
  };

  const handleRefecht = async () => {
    const instance = axiosClient();

    const { data, status } = await instance.get(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.getAllorders}`
    );
    console.log(
      '🚀 ~ file: index.tsx:46 ~ handleRefecht ~ data:',
      status,
      data
    );

    if (status === 200) {
      setorderList(data);
    } else {
      toast()?.show({
        severity: 'error',
        summary: 'Error al cargar los pedidos',
        detail: 'Ocurrio un error al cargar los pedidos',
      });
    }
  };

  return (
    <Container className='py-5'>
      <FilterAdmin handleFilter={handleFilter} />
      <Row className={classes.card_container}>
        {!data ? (
          <div className='text-center mt-5'>
            <h1>Error al cargar pedidos</h1>
          </div>
        ) : orderList?.length ? (
          orderList
            ?.filter((i) => i.Invoice?.status === filterData)
            .map((item) => (
              <Col xs={12} md={3} key={item.id} className={classes.col}>
                <CardAdmin {...item} handleRefecht={handleRefecht} />
              </Col>
            ))
        ) : (
          <div className='text-center mt-5'>
            <h1>No hay pedidos</h1>
          </div>
        )}
      </Row>
    </Container>
  );
};
