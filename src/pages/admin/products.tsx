// main tools
import { useEffect, useState } from 'react';

// componets
import { CreateProduct } from '@/components/organisms/admin/CreateProduct';
import { AdminLayout } from '@/components/molecules/Layout/AdminLayout';
import { ProductCard } from '@/components/organisms/admin/ProductCard';
import { Button } from '@/components/atoms/Button';

// boootstrap
import { Col, Container, Row } from 'react-bootstrap';

// lib
import axiosClient from '@/lib/axios';

// utils
import { endpoints } from '@/utils/fetch';

// hooks
import { useApp } from '@/hooks/useApp';

// styles
import classes from '@/styles/organisms/administrador/products.module.scss';

// types
import { GetServerSidePropsContext, NextPage, GetServerSideProps } from 'next';

//
import { ProductDataType } from '@/types/shoppingCart';
import { GetSSPropsType } from '@/types';

const Products: NextPage<GetSSPropsType<typeof getServerSideProps>> = ({
  data,
}) => {
  const { toast } = useApp();
  const [flag, setFlag] = useState(false);
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [productList, setProductList] = useState<ProductDataType[]>(data);

  const handleShowCreateProduct = () =>
    setShowCreateProduct(!showCreateProduct);

  useEffect(() => {
    if (flag) {
      (async () => {
        const instance = axiosClient();
        const { data, status } = await instance.get(
          `${process.env.NEXT_PUBLIC_API_URL}${endpoints.getAllproducts}`
        );
        if (status === 200) setProductList(data);
        else
          toast()?.show({
            summary: 'Error',
            severity: 'error',
            detail: 'No se pudo obtener la lista de productos',
          });
      })();

      setFlag(false);
    }
  }, [flag, toast]);

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
          <Row className={classes.card_container}>
            {productList.map((item) => (
              <Col xs={12} md={3} key={item.id} className={classes.col}>
                <ProductCard {...item} refetch={setFlag} />
              </Col>
            ))}
          </Row>
        </Container>
      </AdminLayout>

      <CreateProduct
        refetch={setFlag}
        visible={showCreateProduct}
        handleVisible={handleShowCreateProduct}
      />
    </>
  );
};

export default Products;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const axiosInstance = axiosClient(ctx);
  const { data } = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoints.getAllproducts}`
  );

  return {
    props: { data },
  };
}
