// main tools
import { useCallback, useMemo, useReducer, useState } from 'react';

// components
import { FormPay } from '@/components/organisms/Menu/FormPay';
import { ShoppingCard } from '@/components/organisms/ShoppingCart';

// reducer
import { reducer } from './reducer';

// context
import { ShoppingContext } from './context';

// utils
import { shoppingCartInitialState } from './reducer/utils';

// types
import { FC, ReactNode } from 'react';

type shoppingCartContextProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContextProvider: FC<
  shoppingCartContextProviderProps
> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [shoppingCartState, dispatch] = useReducer(
    reducer,
    shoppingCartInitialState
  );

  const handleShowForm = useCallback(() => {
    setShowModalForm(!showModalForm);
  }, [showModalForm]);

  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const context = useMemo(
    () => ({
      dispatch,
      handleShow,
      handleShowForm,
      shoppingCartState,
    }),
    [shoppingCartState, handleShow, handleShowForm]
  );

  return (
    <ShoppingContext.Provider value={context}>
      {children}

      <ShoppingCard
        show={show}
        handleShow={handleShow}
        handleShowForm={handleShowForm}
        shoppingCartState={shoppingCartState}
      />

      <FormPay showModalForm={showModalForm} handleShow={handleShowForm} />
    </ShoppingContext.Provider>
  );
};
