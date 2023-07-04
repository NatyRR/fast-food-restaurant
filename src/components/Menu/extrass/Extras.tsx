import { FC } from "react";
import classes from "@/styles/organisms/Menu/extrass/extras.module.scss";
import { listCardsExtras } from "../utils";
import { Col, Row } from "react-bootstrap";
import { Card } from "../Card";

export const Extras: FC = () => {
  return (
    <Row className={classes.row}>
      {listCardsExtras.map((item, index) => (
        <Col xs={12} md={4} key={item.sabor} className={classes.col}>
          <Card
            imagen={item.imagen}
            sabor={item.sabor}
            info={item.info}
            price={item.price}
          />
        </Col>
      ))}
    </Row>
  );
};
