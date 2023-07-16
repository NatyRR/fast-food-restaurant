// main tools
import { useState } from 'react';

// componets
import { CreateProduct } from '@/components/organisms/admin/CreateProduct';
import { AdminLayout } from '@/components/molecules/Layout/AdminLayout';
import { Button } from '@/components/atoms/Button';

// boootstrap
import { Col, Container, Row } from 'react-bootstrap';

// styles
import classes from '@/styles/organisms/administrador/products.module.scss';

// types
import { NextPage } from 'next';

const Products: NextPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleShowCreateProduct = () =>
    setShowCreateProduct(!showCreateProduct);

  return (
    <>
      <AdminLayout page='Productos'>
        <Container className={classes.container}>
          <Row className=' my-5 justify-content-center'>
            <Col xs={8} md={2}>
              <Button variant='naranja' onClick={handleShowCreateProduct}>
                Agregar Producto
              </Button>
            </Col>
          </Row>
          {/* <Row className={classes.card_container}>
          {orders.map((item) => (
            <Col xs={12} md={3} key={item.id} className={classes.col}>
              <CardAdmin
                id={item.id}
                status={item.status}
                userName={item.user}
                invoice={item.invoice}
                address={item.address}
                products={item.products}
              />
            </Col>
          ))}
        </Row> */}
        </Container>
      </AdminLayout>

      <CreateProduct
        visible={showCreateProduct}
        handleVisible={handleShowCreateProduct}
      />
    </>
  );
};

export default Products;
