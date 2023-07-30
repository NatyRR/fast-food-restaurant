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
  const [filterData, setFilterData] =
    useState<keyof typeof InvoiceStatusEnum>();
  console.log('🚀 ~ file: index.tsx:26 ~ orderList:', orderList);

  const handleFilter = (filter: keyof typeof InvoiceStatusEnum) => {
    if (filterData === filter) setFilterData(undefined);
    else setFilterData(filter);
  };

  //! implementacion de SOCKETS para el componente... no funciona
  // const { socket } = useIo();

  // console.log('🚀 ~ file: index.tsx:24 ~ AdminPage ~ socketState:', socket);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('initialOrders', (data: any) => {
  //       if (data) {
  //         console.log('🚀 ~ file: index.tsx:39 ~ socket.on ~ data:', data);
  //         setorderList(data);
  //       }
  //     });

  //     socket.on('newOrder', (data: any) => {
  //       if (data) {
  //         console.log('🚀 ~ file: index.tsx:46 ~ socket.on ~ data:', data);
  //         setorderList(data);
  //       }
  //     });

  //     return () => {
  //       socket.off('initialOrders', () => console.log('initialOrders off'));
  //       socket.off('newOrder', () => console.log('newOrder off'));
  //     };
  //   }
  // }, [socket]);

  return (
    <Container>
      <FilterAdmin handleFilter={handleFilter} />
      <Row className={classes.card_container}>
        {!data ? (
          <div className='text-center mt-5'>
            <h1>Error al cargar pedidos</h1>
          </div>
        ) : orderList?.length ? (
          orderList
            ?.filter((i) => i.invoice?.status === filterData)
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
