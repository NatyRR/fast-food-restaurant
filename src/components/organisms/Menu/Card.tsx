//components
import { Button } from '@/components/atoms/Button';

//boostrap
import { Image } from 'react-bootstrap';

//styles
import classes from '@/styles/organisms/Menu/card.module.scss';

//types
import { FC } from 'react';

type CardProps = {
  imagen: string;
  sabor: string;
  info: string;
  price: string;
};

export const Card: FC<CardProps> = ({ imagen, sabor, info, price }) => {
  return (
    <div className={classes.card_container}>
      <div className={classes.container_imagen}>
        <div className={classes.image}>
          <Image src={imagen} alt='imagen referencial' />
        </div>
      </div>
      <div className={classes.card}>
        <h2 className={classes.title}>{sabor}</h2>
        <div className={classes.information}>
          <div className={classes.price}>
            <h3>{info}</h3>
            <h3>{price}</h3>
          </div>
        </div>

        <div className={classes.button}>
          <Button variant='naranja'>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};
