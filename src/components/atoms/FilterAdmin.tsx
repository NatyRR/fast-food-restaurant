import React from "react";
import { FC } from "react";
import { Container } from "react-bootstrap";
import classes from "@/styles/molecules/filter-admin/filter.module.scss";
import { Button } from "@/components/atoms/Button";

export const FilterAdmin: FC = () => {
  return (
    <Container className={classes.container}>
      <Button variant="naranja">Pago</Button>
      <Button variant="naranja">No Pago</Button>
    </Container>
  );
};
