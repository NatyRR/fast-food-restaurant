// components
import { Button } from '@/components/atoms/Button';

// bootstrap
import { Col, Image, Row } from 'react-bootstrap';

// icons
import { Trash } from 'react-bootstrap-icons';

// hooks
import { useShoppingCart } from '@/hooks/useShoppingCart';

// reducer
import { shoppingCartCases } from '@/context/shopping/reducer/case';

// styles
import classes from '@/styles/molecules/productCard/styles.module.scss';

// types
import { ProductDataType } from '@/types/shoppingCart';
import React, { FC } from 'react';
import { useSession } from 'next-auth/react';

interface ProductCard extends ProductDataType {}

export const ProductCard: FC<ProductDataType> = ({
  id,
  name,
  image,
  price,
  flavor,
  quantity,
}) => {
  const { dispatch } = useShoppingCart();

  const add = () => {
    dispatch({
      type: shoppingCartCases.ADD_QUANTITY_TO_ITEM,
      payload: { id },
    });
    dispatch({
      type: shoppingCartCases.UPDATE_AMOUNT,
      payload: null,
    });
  };

  const remove = () => {
    if (quantity! > 1)
      dispatch({
        type: shoppingCartCases.REMOVE_QUANTITY_TO_ITEM,
        payload: { id },
      });
    else
      dispatch({
        type: shoppingCartCases.REMOVE_FROM_CART,
        payload: { id },
      });

    dispatch({
      type: shoppingCartCases.UPDATE_AMOUNT,
      payload: null,
    });
  };

  return (
    <Row className={classes.container}>
      <Col xs={2} className={classes.img}>
        <Image src={image} alt='' />
      </Col>
      <Col xs={6}>
        <div className={classes.infoProduct}>
          <h3>{`${name}  ${flavor}`}</h3>
          <div className={classes.price}>
            <span>{price}$</span>
          </div>
        </div>
      </Col>
      <Col xs={4}>
        <div className={classes.controls}>
          {quantity === 1 ? (
            <div onClick={remove} className={classes.icons}>
              <Trash size={25} />
            </div>
          ) : (
            <Button
              onClick={remove}
              variant='naranja'
              className={classes.button_control}
            >
              -
            </Button>
          )}

          <span>{quantity}</span>
          <Button
            onClick={add}
            variant='naranja'
            className={classes.button_control}
          >
            +
          </Button>
        </div>
      </Col>
    </Row>
  );
};
