// components
import { Card } from '../Card';

// bootstrap
import { Col, Row } from 'react-bootstrap';

// framer motion
import { motion } from 'framer-motion';

// utils
import { endpoints } from '@/utils/fetch';

// lib
import axios from 'axios';

// hooks
import { useApp } from '@/hooks/useApp';

// styles
import classes from '@/styles/organisms/Menu/extrass/extras.module.scss';

// types
import { ProductDataType } from '@/types/shoppingCart';
import { FC, useEffect, useState } from 'react';

export const Food: FC = () => {
  const { toast } = useApp();
  const [foodList, setFoodList] = useState<ProductDataType[]>();

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}${endpoints.getActiveProducts}`
        );
        if (status === 200) {
          const dataFilter = data.filter(
            (item: ProductDataType) => item.principal
          );
          setFoodList(dataFilter);
        } else {
          toast()?.show({
            summary: 'Error',
            severity: 'error',
            detail: `No se pudo cargar los productos ${data.message}`,
          });
        }
      } catch (error) {
        toast()?.show({
          summary: 'Error',
          severity: 'error',
          detail: `No se pudo cargar los productos ${String(error)}`,
        });
      }
    })();
  }, [toast]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Row className={classes.row}>
        {foodList?.map((item, index) => (
          <Col xs={12} md={4} key={item.id} className={classes.col}>
            <Card {...item} />
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};
