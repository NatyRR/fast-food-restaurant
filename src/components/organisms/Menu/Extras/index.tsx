// components
import { Card } from '../Card';

// bootstrap
import { Col, Row } from 'react-bootstrap';

// framer motion
import { motion } from 'framer-motion';

// utils
import { listCardsExtras } from '../utils';

// styles
import classes from '@/styles/organisms/Menu/extrass/extras.module.scss';

// types
import { FC } from 'react';

export const Extras: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Row className={classes.row}>
        {listCardsExtras.map((item, index) => (
          <Col xs={12} md={4} key={item.sabor} className={classes.col}>
            <Card img={item.imagen} name={item.sabor} price={item.price} />
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};
