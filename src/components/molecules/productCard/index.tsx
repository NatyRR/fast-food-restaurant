import React, { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import classes from '@/styles/molecules/productCard/styles.module.scss';
import { Button } from '@/components/atoms/Button';

export const ProductCard: FC = () => {
  return (
    <Row className={classes.container}>
      <Col xs={3} className={classes.img}>
        <Image src='/asset/img/empanada.png' alt='' />
      </Col>
      <Col xs={6}>
        <div className={classes.infoProduct}>
          <h3>Empanada de carne</h3>
          <div className={classes.price}>
            <span>2000$</span>
          </div>
        </div>
      </Col>
      <Col xs={3}>
        <div className={classes.controls}>
          <Button className={classes.button_control} variant='naranja'>
            -
          </Button>
          <span>1</span>
          <Button className={classes.button_control} variant='naranja'>
            +
          </Button>
        </div>
      </Col>
    </Row>
  );
};
