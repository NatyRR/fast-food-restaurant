import { useState } from 'react';

// components
import { Button } from '@/components/atoms/Button';

// bootstrap
import { Image } from 'react-bootstrap';

// prime
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';

// libs
import axiosClient from '@/lib/axios';

// icons
import { StarFill, ClipboardCheck, Trash } from 'react-bootstrap-icons';

// utils
import { endpoints } from '@/utils/fetch';

// commons
import { statusProductEnum } from '@/common/enums';

// hooks
import { useApp } from '@/hooks/useApp';

// style
import classes from '@/styles/organisms/administrador/productCard.module.scss';

// types
import { SetStateType } from '@/types';
import { FC } from 'react';

type ProductCardProps = {
  id?: number;
  name?: string;
  price?: number;
  stock?: number;
  image?: string;
  flavor?: string;
  status?: string;
  principal?: boolean;
  description?: string;
  refetch: SetStateType<boolean>;
};

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  stock,
  image,
  status,
  flavor,
  refetch,
  principal,
  description,
}) => {
  const { toast } = useApp();
  const [loading, setLoading] = useState(false);

  const [principalProduct, setPrincipalProduct] = useState(principal);
  const [productData, setProductData] = useState({
    price: price,
    stock: stock,
  });

  const handleChange = (e: any, name: string) => {
    setProductData({ ...productData, [name]: e.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const instance = axiosClient();

      const dataSend = {
        ...productData,
        principalProduct,
      };

      const { data, status } = await instance.put(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.updateProduct}/${id}`,
        dataSend
      );

      if (status > 200) {
        toast()?.show({
          severity: 'success',
          summary: 'Exito',
          detail: `Se actualizo el producto ${name}`,
        });
        refetch(true);
      } else {
        toast()?.show({
          severity: 'error',
          summary: 'Error',
          detail: `Ocurrio un error al actualizar el producto`,
        });
      }
    } catch (error) {
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: `Ocurrio un error al actualizar el producto ${String(error)}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleProdcut = async () => {
    setLoading(true);
    try {
      const instance = axiosClient();
      const { data, status } = await instance.put(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.toggleProduct}/${id}`
      );

      if (status === 200) {
        toast()?.show({
          severity: 'success',
          summary: 'Exito',
          detail: `Se activo el producto ${name}`,
        });
        refetch(true);
      } else {
        toast()?.show({
          severity: 'error',
          summary: 'Error',
          detail: `Ocurrio un error al activar el producto`,
        });
      }
    } catch (error) {
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: `Ocurrio un error al activar el producto ${String(error)}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    setLoading(true);
    try {
      const instance = axiosClient();
      const { data, status } = await instance.delete(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoints.deleteProduct}/${id}`
      );

      if (status === 200) {
        toast()?.show({
          severity: 'success',
          summary: 'Exito',
          detail: `Se elimino el producto ${name}`,
        });
        refetch(true);
      } else {
        toast()?.show({
          severity: 'error',
          summary: 'Error',
          detail: `Ocurrio un error al eliminar el producto`,
        });
      }
    } catch (error) {
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: `Ocurrio un error al eliminar el producto ${String(error)}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.card_container}>
      <div className={classes.container_img}>
        <div className={classes.img}>
          <Image src={image!} alt='' />
        </div>
      </div>
      <div className={classes.card}>
        <h2 className={classes.title}>{name} de </h2>
        <h3 className={classes.title}>{flavor}</h3>
        <div className={classes.content}>
          <span className={classes.description}>{description}</span>
          <div className={classes.information}>
            <div className={classes.price}>
              <span className={classes.label}>Precio</span>
              <InputNumber
                name='price'
                value={productData.price}
                className={classes.input_number}
                onChange={(e) => handleChange(e, 'price')}
              />
            </div>
            <div className={classes.review}>
              <span className={classes.label}>Existencia</span>
              <InputNumber
                name='stock'
                value={productData.stock}
                className={classes.input_number}
                onChange={(e) => handleChange(e, 'stock')}
              />
            </div>
          </div>

          <div className={classes.options}>
            <div className='d-flex gap-2 align-items-center'>
              <label className='ml-2'>PrincipalProduct</label>
              <RadioButton
                checked={principalProduct}
                onChange={(e) => setPrincipalProduct(true)}
              />
            </div>
            <div className='d-flex gap-2 align-items-center'>
              <label className='ml-2'>Extras</label>
              <RadioButton
                checked={!principalProduct}
                onChange={(e) => setPrincipalProduct(false)}
              />
            </div>
          </div>

          <div className={classes.wrapper_buttons}>
            <div role='button' onClick={handleDeleteProduct}>
              <Trash size={30} color='red' />
            </div>

            <div>
              <Button
                variant='naranja'
                loading={loading}
                onClick={handleToggleProdcut}
              >
                {status === statusProductEnum.active ? 'Desactivar' : 'Activar'}
              </Button>
            </div>

            <div role='button' onClick={handleUpdate}>
              <ClipboardCheck size={30} color='green' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
