import React from "react";
import { FC } from "react";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import classes from "@/styles/organisms/Menu/food/food.module.scss";
import { listCards } from "../utils";
import { Card } from "../Card";

export const Food: FC = () => {
  return (
    <motion.div>
      <Row className={classes.row}>
        {listCards.map((item, index) => (
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
    </motion.div>
  );
};
