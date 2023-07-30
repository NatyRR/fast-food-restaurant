//Main Tools
import { useState } from 'react';

//Components
import { Button } from '@/components/atoms/Button';

//Boostrap
import { Col, Container, Row } from 'react-bootstrap';

//primeReact
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';

//utils
import {
  accountInformation,
  paymentMethodOptions,
  transferMethodOptions,
  effectiveMethodOptions,
} from './utils';

// hooks
import { useShoppingCart } from '@/hooks/useShoppingCart';

//Enums
import { paymentMethodEnum } from '@/common/enums';

//styles
import classes from '@/styles/organisms/Menu/dialog.module.scss';

//types
import { ShoppingCartDataType } from '@/types/shoppingCart';
import { DropdownChangeEvent } from 'primereact/dropdown';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import axiosClient from '@/lib/axios';
import { endpoints } from '@/utils/fetch';
import { useApp } from '@/hooks/useApp';

type DialogProps = {
  showModalForm: boolean;
  handleShow: () => void;
};

export const FormPay: FC<DialogProps> = ({ showModalForm, handleShow }) => {
  const { toast } = useApp();
  const [ref, setRef] = useState('');
  const { data: session } = useSession();
  const [address, setAddress] = useState('');
  const [delivery, setDelivery] = useState(false);
  const [transferMethod, setTransferMethod] = useState('');
  const [effectiveMethod, setEffectiveMethod] = useState('');
  const { shoppingCartState, handleShowForm } = useShoppingCart();
  const [moneyCash, setMoneyCash] = useState<number | null>(null);
  const [selectedMethod, setSelectedMethod] =
    useState<keyof typeof paymentMethodEnum>();

  const handleSubmit = async () => {
    const instance = axiosClient();
    const body = {
      address: address,
      userId: session?.user.id,
      products: shoppingCartState.items,
      paymentMethodId: selectedMethod,
    };

    const { data, status } = await instance.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoints.createOrder}`,
      body
    );

    if (status !== 201) {
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Ocurrio un error al procesar la orden',
      });
      return;
    }

    toast()?.show({
      severity: 'success',
      summary: 'Orden procesada',
      detail: 'Su orden ha sido procesada con exito',
    });
    return;
  };

  return (
    <Dialog
      closable={false}
      draggable={false}
      resizable={false}
      onHide={handleShow}
      visible={showModalForm}
      className={classes.modal}
      header={`Total a pagar: $${shoppingCartState.amount}`}
    >
      <Container className={classes.container}>
        <h4 className='text-center mb-5'>Formulario de pago</h4>

        <div className={classes.delivery}>
          <label className='text-center'>
            ¿Desea incluir servicio de delivery?
          </label>
          <div className={classes.options}>
            <div className='d-flex gap-2 align-items-center'>
              <label className='ml-2'>Si</label>
              <RadioButton
                checked={delivery}
                onChange={(e) => setDelivery(true)}
              />
            </div>
            <div className='d-flex gap-2 align-items-center'>
              <label className='ml-2'>No</label>
              <RadioButton
                checked={!delivery}
                onChange={(e) => setDelivery(false)}
              />
            </div>
          </div>

          {delivery && (
            <div className={classes.delivery_information}>
              <label>Ingresa una direccion de entrega</label>
              <InputText
                value={address}
                className='w-100'
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className={classes.paymentMethods}>
          <div className='d-flex flex-column gap-1'>
            <label>Seleccione con que desea pagar</label>
            <div className={classes.paymentMethodOptions}>
              <Dropdown
                className='w-100'
                value={selectedMethod}
                options={paymentMethodOptions}
                placeholder='Selecciona tu metodo'
                onChange={(e: DropdownChangeEvent) =>
                  setSelectedMethod(e.value)
                }
              />
            </div>
          </div>

          {selectedMethod === paymentMethodEnum.CASH && (
            <div className={classes.effective_method}>
              <div className={classes.badge}>
                <label> Elija la divisa con la que va a pagar </label>
                <Dropdown
                  className='w-100'
                  placeholder='Divisas'
                  value={effectiveMethod}
                  options={effectiveMethodOptions}
                  onChange={(e: DropdownChangeEvent) =>
                    setEffectiveMethod(e.value)
                  }
                />
              </div>
              <div className={classes.input_num}>
                <div className={classes.monto}>
                  <label>Monto en efectivo con el que va a pagar </label>
                </div>
                <InputNumber
                  value={moneyCash}
                  inputId='integeronly'
                  onValueChange={(e) => setMoneyCash(e.value!)}
                />
              </div>
            </div>
          )}

          {selectedMethod === paymentMethodEnum.TRANSFER && (
            <div className={classes.transferMethod}>
              <div className={classes.selectAccount}>
                <label>Seleccione una cuenta para transferir</label>
                <Dropdown
                  className='w-100'
                  value={transferMethod}
                  placeholder='Cuentas'
                  options={transferMethodOptions}
                  onChange={(e: DropdownChangeEvent) =>
                    setTransferMethod(e.value)
                  }
                />
              </div>
              {accountInformation.map((item, index) => {
                if (transferMethod === item.cuenta)
                  return (
                    <div className={classes.account_Information} key={index}>
                      <h6>{item.cuenta}</h6>
                      <span>Numero de cuenta:</span>
                      <p>{item.numero_de_cuenta}</p>
                      <span>Cedula:</span>
                      <p>{item.cedula}</p>
                      <span>Tipo de cuenta:</span>
                      <p>{item.tipo_de_cuenta}</p>
                    </div>
                  );
              })}

              <div className={classes.confirm_Payment}>
                {/* imput file */}
                <div className={classes.inputFile}>
                  <label>Inserte su comprobante aqui:</label>

                  <input
                    type='file'
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                  />
                </div>
                <div className={classes.reference}>
                  <label>Ingrese el numero de referencia:</label>
                  <InputText
                    value={ref}
                    className='w-100'
                    onChange={(e) => setRef(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>

      <Row className={classes.footer_buttons}>
        <Col xs={6} className={classes.Col}>
          <Button variant='naranja' onClick={handleShowForm}>
            Cancelar
          </Button>{' '}
        </Col>
        <Col xs={6}>
          <Button variant='naranja'>Pagar</Button>
        </Col>
      </Row>
    </Dialog>
  );
};
