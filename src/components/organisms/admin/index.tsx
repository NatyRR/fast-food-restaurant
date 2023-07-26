// main tools
import { useEffect, useState } from 'react';

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

export const AdminPage = () => {
  const { socket } = useIo();
  // const [orderList, setorderList] = useState<OrderDataType[]>();

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
      <FilterAdmin />
      <Row className={classes.card_container}>
        {orders.map((item) => (
          <Col xs={12} md={3} key={item.id} className={classes.col}>
            <CardAdmin
              id={item.id}
              status={item.status}
              userName={item.user}
              invoice={item.invoice}
              address={item.address}
              products={item.products}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
