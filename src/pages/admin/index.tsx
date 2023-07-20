import React from "react";
import { AdminLayout } from "../../components/molecules/Layout/AdminLayout";
import { Col, Container, Row } from "react-bootstrap";
import { CardAdmin } from "@/components/atoms/CardAdmin";
import classes from "@/styles/organisms/administrador/admin.module.scss";
import { FilterAdmin } from "@/components/atoms/FilterAdmin";
import { orders } from "@/components/organisms/admin/utils";

export default function administrador() {
  return (
    <AdminLayout page="Pedidos">
      <Container>
        <FilterAdmin />
        <Row className={classes.card_container}>
          {orders.map((item) => (
            <Col xs={12} md={3} key={item.id} className={classes.col}>
              <CardAdmin
                id={item.id}
                status={item.status}
                createdAt={item.createdAt}
                userName={item.user}
                invoice={item.invoice}
                address={item.address}
                products={item.products}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </AdminLayout>
  );
}
