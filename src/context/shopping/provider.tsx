// main tools
import { useCallback, useMemo, useReducer, useState } from 'react';

// prime react
import { Sidebar } from 'primereact/sidebar';

// icons
import { CaretLeft } from 'react-bootstrap-icons';

// reducer
import { reducer } from './reducer';

// context
import { ShoppingContext } from './context';

// utils
import { shoppingCartInitialState } from './reducer/utils';

// styles
import classes from '@/styles/molecules/shoppingCart/styles.module.scss';

// types
import { FC, ReactNode } from 'react';
import { ProductCard } from '@/components/molecules/productCard';
import { Col, Row } from 'react-bootstrap';

type shoppingCartContextProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContextProvider: FC<
  shoppingCartContextProviderProps
> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [shoppingCartState, dispatch] = useReducer(
    reducer,
    shoppingCartInitialState
  );

  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const context = useMemo(
    () => ({
      dispatch,
      handleShow,
      shoppingCartState,
    }),
    [shoppingCartState, handleShow]
  );

  return (
    <ShoppingContext.Provider value={context}>
      {children}

      <Sidebar
        visible={show}
        position='right'
        onHide={handleShow}
        showCloseIcon={false}
        className={classes.sidebar}
      >
        <div className={classes.container}>
          <div className={classes.title_control}>
            <div className={classes.icon}>
              <CaretLeft size={20} />
            </div>
            <h4>Carrito de compras</h4>
          </div>

          <Row className='gap-3'>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
            <Col xs={12}>
              <ProductCard />
            </Col>
          </Row>
        </div>
      </Sidebar>
    </ShoppingContext.Provider>
  );
};
