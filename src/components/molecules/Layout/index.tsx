// main tools
import Head from 'next/head';

// components
import { Button } from '@/components/atoms/Button';
import { Navbar } from '../navbar';

// bootstrap
import { Col, Row } from 'react-bootstrap';

// icons
import { Cart4 } from 'react-bootstrap-icons';

// hooks
import { useShoppingCart } from '@/hooks/useShoppingCart';

// styles
import classes from '@/styles/molecules/Layout/layout.module.scss';

// types
import { FC } from 'react';

interface Layoutprops {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Layoutprops> = ({
  title = 'Fact Food Restaurand',
  children,
}) => {
  const { shoppingCartState, handleShow } = useShoppingCart();

  return (
    <div className={classes.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={classes.content}>
        <Navbar />
        <main>{children}</main>

        {shoppingCartState?.amount! > 0 && (
          <Row className={classes.floatButton}>
            <Button variant='naranja' onClick={handleShow}>
              <div className='d-flex justify-content-between'>
                <Cart4 size={20} />
                <span>{shoppingCartState.amount}$</span>
              </div>
            </Button>
          </Row>
        )}
      </div>
    </div>
  );
};
