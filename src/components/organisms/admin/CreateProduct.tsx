// main tools
import axiosClient from '@/lib/axios';
import { useState } from 'react';

// components
import { Button } from '@/components/atoms/Button';

// bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// prime react
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';

// hooks
import { useApp } from '@/hooks/useApp';

// utils
import { endpoints } from '@/utils/fetch';

// styles
import classes from '@/styles/organisms/administrador/products.module.scss';

// type
import { InputNumberChangeEvent } from 'primereact/inputnumber';
import { FC, ChangeEvent } from 'react';
import { SetStateType } from '@/types';

type CreateProductProps = {
  visible: boolean;
  handleVisible: () => void;
  refetch: SetStateType<boolean>;
};

export const CreateProduct: FC<CreateProductProps> = ({
  visible,
  refetch,
  handleVisible,
}) => {
  const { toast } = useApp();
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: '',
    stock: 0,
    price: 0,
    image: '',
    flavor: '',
    description: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | InputNumberChangeEvent,
    name?: string
  ) => {
    if (name) {
      setformData({ ...formData, [name]: (e as InputNumberChangeEvent).value });
      return;
    } else {
      const { name, value } = (e as ChangeEvent<HTMLInputElement>).target;
      setformData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const instance = axiosClient();
      const { data, status } = await instance.post(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.createProduct}`,
        { ...formData }
      );

      if (status !== 201) {
        toast()?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al crear el producto',
        });
      } else {
        toast()?.show({
          severity: 'success',
          summary: 'Success',
          detail: 'Producto creado correctamente',
        });
        refetch(true);
        handleVisible();
      }
    } catch (error) {
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      draggable={false}
      resizable={false}
      visible={visible}
      header='Agregar producto'
      className={classes.modal}
      onHide={() => handleVisible()}
    >
      <Container className={classes.container}>
        <form onSubmit={handleSubmit}>
          <Row className='gap-3'>
            <Col xs={12} md={5}>
              <span className='w-100 p-float-label'>
                <InputText
                  name='name'
                  value={formData.name}
                  className={classes.input}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor='user'>Nombre</label>
              </span>
            </Col>
            <Col xs={12} md={5}>
              <span className='w-100 p-float-label'>
                <InputText
                  name='flavor'
                  value={formData.flavor}
                  className={classes.input}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor='user'>Sabor</label>
              </span>
            </Col>
            <Col xs={12} className='my-4'>
              <span className='w-100 p-float-label'>
                <InputText
                  name='description'
                  value={formData.description}
                  className={classes.input}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor='user'>descripcion</label>
              </span>
            </Col>
            <Col xs={12} md={5}>
              <span className='w-100 p-float-label'>
                <InputNumber
                  name='price'
                  value={formData.price}
                  className={classes.input_number}
                  onChange={(e) => handleChange(e, 'price')}
                />
                <label htmlFor='user'>Precio</label>
              </span>
            </Col>
            <Col xs={12} md={5}>
              <span className='w-100 p-float-label'>
                <InputNumber
                  name='stock'
                  value={formData.stock}
                  className={classes.input_number}
                  onChange={(e) => handleChange(e, 'stock')}
                />
                <label htmlFor='user'>Existencias</label>
              </span>
            </Col>
            <Col xs={12} className='mt-4'>
              <span className='w-100 p-float-label'>
                <InputText
                  name='image'
                  value={formData.image}
                  className={classes.input}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor='user'>Image</label>
              </span>
            </Col>

            <Col xs={12}>
              <Button
                type='submit'
                variant='naranja'
                loading={loading}
                className={classes.button}
              >
                Agregar producto
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </Dialog>
  );
};
