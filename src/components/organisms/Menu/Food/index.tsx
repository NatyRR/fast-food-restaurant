// components
import { Card } from '../Card';

// bootstrap
import { Col, Row } from 'react-bootstrap';

// framerMotion
import { motion } from 'framer-motion';

// utils
import { listCards } from '../utils';

// styles
import classes from '@/styles/organisms/Menu/food/food.module.scss';

// types
import { FC } from 'react';

export const Food: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
