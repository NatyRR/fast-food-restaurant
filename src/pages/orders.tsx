import { CardAdmin } from "@/components/atoms/CardAdmin";
import { orders } from "@/components/organisms/admin/utils";
import { Col, Container, Row } from "react-bootstrap";
import classes from "@/styles/organisms/orders/orders.module.scss";
import { Navbar } from "@/components/molecules/navbar";
import { OrdersCard } from "@/components/organisms/order/OrdersCard";

export default function Orders() {
  return (
    <Container>
      <Navbar />
      <Row className={classes.card_container}>
        {orders.map((item) => (
          <Col xs={12} md={3} key={item.id} className={classes.col}>
            <OrdersCard
              id={item.id}
              createdAt={item.createdAt}
              userName={item.user}
              address={item.address}
              products={item.products}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
