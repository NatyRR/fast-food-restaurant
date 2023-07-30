import { CardAdmin } from "@/components/atoms/CardAdmin";
import { orders } from "@/components/organisms/admin/utils";
import { Col, Container, Row } from "react-bootstrap";
import classes from "@/styles/organisms/orders/orderCard.module.scss";
import { Navbar } from "@/components/molecules/navbar";
import { OrdersCard } from "@/components/organisms/order/OrdersCard";
import { GetServerSidePropsContext, NextPage } from "next";
import axiosClient from "@/lib/axios";
import { endpoints } from "@/utils/fetch";
import { GetSSPropsType } from "@/types";
import { useState } from "react";

const Orders: NextPage<GetSSPropsType<typeof getServerSideProps>> = ({
  data,
}) => {
  const [orderList, setorderList] = useState(data);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Navbar />
        <Row className={classes.card_container}>
          {orderList.map((item: any) => (
            <Col xs={12} md={3} key={item.id} className="mb-5">
              <OrdersCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Orders;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queso = axiosClient(ctx);
  const { data, status } = await queso.post(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoints.findOrderByUser}`
  );

  return {
    props: {
      data: status > 200 ? data : null,
    },
  };
};
