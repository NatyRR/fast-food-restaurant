import React from "react";
import { AdminLayout } from "../components/molecules/Layout/AdminLayout";
import { Container } from "react-bootstrap";
import { CardAdmin } from "@/components/atoms/CardAdmin";
import classes from "@/styles/organisms/administrador/admin.module.scss";
import { FilterAdmin } from "@/components/atoms/FilterAdmin";

export default function administrador() {
  return (
    <AdminLayout>
      <Container>
        <FilterAdmin />
        <div className={classes.card_container}>
          <CardAdmin />
        </div>
      </Container>
    </AdminLayout>
  );
}
