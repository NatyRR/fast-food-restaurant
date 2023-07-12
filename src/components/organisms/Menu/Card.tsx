//components
import { Button } from '@/components/atoms/Button';

//boostrap
import { Image } from 'react-bootstrap';

// icons
import { StarFill } from 'react-bootstrap-icons';

//reducer
import { shoppingCartCases } from '@/context/shopping/reducer/case';

// hooks
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useApp } from '@/hooks/useApp';

//styles
import classes from '@/styles/organisms/Menu/card.module.scss';

//types
import { FC } from 'react';

type CardProps = {
  name: string;
  img: string;
  price: number;
};

export const Card: FC<CardProps> = ({ img, name, price }) => {
  const { toast } = useApp();
  const { dispatch, shoppingCartState } = useShoppingCart();

  const addToCart = () => {
    const { items } = shoppingCartState;
    const product = { img, name, price, quantity: 1 };

    if (items.find((item) => item.name === name)) {
      dispatch({
        payload: { itemName: name },
        type: shoppingCartCases.ADD_QUANTITY_TO_ITEM,
      });
      dispatch({
        payload: null,
        type: shoppingCartCases.UPDATE_AMOUNT,
      });
      toast()?.show({
        severity: 'info',
        detail: 'se agrego 1 mas al producto',
      });
    } else {
      dispatch({
        payload: { item: product },
        type: shoppingCartCases.ADD_TO_CART,
      });
      dispatch({
        payload: null,
        type: shoppingCartCases.UPDATE_AMOUNT,
      });
      toast()?.show({
        severity: 'success',
        summary: 'Producto agregado',
        detail: 'Se agrego el producto al carrito',
      });
    }
  };

  return (
    <div className={classes.card_container}>
      <div className={classes.container_img}>
        <div className={classes.img}>
          <Image src={img} alt='img referencial' />
        </div>
      </div>
      <div className={classes.card}>
        <h2 className={classes.title}>{name}</h2>
        <div className={classes.content}>
          <div className={classes.information}>
            <div className={classes.price}>
              <span className={classes.label}>Price</span>
              <span className={classes.value}>{price} $</span>
            </div>
            <div className={classes.review}>
              <span className={classes.label}>Review</span>
              <span className={classes.value}>
                <StarFill size={20} color='red' /> {'  '}
                100
              </span>
            </div>
          </div>

          <div className={classes.button}>
            <Button variant='naranja' onClick={addToCart}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
