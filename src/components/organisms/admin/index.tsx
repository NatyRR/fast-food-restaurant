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

type AdminPageProps = {
  data: OrderDataType[] | null;
};

export const AdminPage: FC<AdminPageProps> = ({ data }) => {
  const [orderList, setorderList] = useState<OrderDataType[] | null>(data);
  const [filterData, setFilterData] = useState<
    keyof typeof InvoiceStatusEnum | undefined
  >('pending');

  const handleFilter = (filter: keyof typeof InvoiceStatusEnum) => {
    if (filterData === filter) setFilterData(undefined);
    else setFilterData(filter);
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
                <CardAdmin {...item} />
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
