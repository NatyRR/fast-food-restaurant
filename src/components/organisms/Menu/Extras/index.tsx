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

export const Extras: FC = () => {
  const { toast } = useApp();
  const [foodList, setFoodList] = useState<ProductDataType[]>();

  useEffect(() => {
    (async () => {
      const { data, status } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.getActiveProducts}`
      );
      console.log('🚀 ~ file: index.tsx:35 ~ data:', data);
      if (status === 200) {
        const dataFilter = data.filter(
          (item: ProductDataType) => !item.principal
        );
        console.log('🚀 ~ file: index.tsx:39 ~ dataFilter:', dataFilter);
        setFoodList(dataFilter);
      } else {
        toast()?.show({
          summary: 'Error',
          severity: 'error',
          detail: `No se pudo cargar los productos ${data.message}`,
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
