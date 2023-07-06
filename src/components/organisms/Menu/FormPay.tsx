//Main Tools
import { useState } from 'react';

//Components
import { Button } from '@/components/atoms/Button';

//Boostrap
import { Col, Row } from 'react-bootstrap';

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

//Enums
import { paymentMethodEnum } from '@/common/enums';

//styles
import classes from '@/styles/organisms/Menu/dialog.module.scss';

//types
import { DropdownChangeEvent } from 'primereact/dropdown';
import { FC } from 'react';

type DialogProps = {
  showModal: boolean;
  handleShow: () => void;
};

export const FormPay: FC<DialogProps> = ({ showModal, handleShow }) => {
  const [delivery, setDelivery] = useState(false);
  const [selectedMethod, setSelectedMethod] =
    useState<keyof typeof paymentMethodEnum>();
  const [effectiveMethod, setEffectiveMethod] = useState('');
  const [moneyCash, setMoneyCash] = useState<number | null>(null);
  const [transferMethod, setTransferMethod] = useState('');
  // input file (input text por los momentos)
  const [value, setValue] = useState('');

  return (
    <Dialog
      header='Formulario de pago'
      visible={showModal}
      style={{ width: '50vw' }}
      onHide={handleShow}
      draggable={false}
      resizable={false}
      className={classes.modal}
    >
      <div className={classes.delivery}>
        <h4>¿Desea incluir servicio de delivery?</h4>
        <div className={classes.opcions}>
          <div className='flex align-items-center'>
            <RadioButton
              inputId='ingredient1'
              name='si'
              value='Si'
              onChange={(e) => setDelivery(true)}
              checked={delivery}
            />
            <label htmlFor='Opcion1' className='ml-2'>
              Si
            </label>
          </div>
          <div className='flex align-items-center'>
            <RadioButton
              inputId='Opcion2'
              name='No'
              value='No'
              onChange={(e) => setDelivery(false)}
              checked={!delivery}
            />
            <label htmlFor='ingredient1' className='ml-2'>
              No
            </label>
          </div>
        </div>
      </div>

      <div className={classes.paymentMethod}>
        <h4>Metodos de pago</h4>
        <div className={classes.paymentMethodOptions}>
          <Dropdown
            value={selectedMethod}
            onChange={(e: DropdownChangeEvent) => setSelectedMethod(e.value)}
            options={paymentMethodOptions}
            placeholder='Selecciona tu metodo'
            className='w-full md:w-14rem'
          />
        </div>

        {selectedMethod === paymentMethodEnum.CASH && (
          <div className={classes.effective_method}>
            <div className={classes.badge}>
              <Dropdown
                value={effectiveMethod}
                onChange={(e: DropdownChangeEvent) =>
                  setEffectiveMethod(e.value)
                }
                options={effectiveMethodOptions}
                placeholder='Divisas'
                className='w-full md:w-14rem'
              />
            </div>
            <div className={classes.input_num}>
              <div className={classes.monto}>
                <span>
                  {' '}
                  <b>Monto de billete a pagar:</b>{' '}
                </span>
              </div>
              <InputNumber
                inputId='integeronly'
                value={moneyCash}
                onValueChange={(e) => setMoneyCash(e.value!)}
              />
            </div>
          </div>
        )}

        {selectedMethod === paymentMethodEnum.TRANSFER && (
          <div className={classes.transferMethod}>
            <Dropdown
              value={transferMethod}
              onChange={(e: DropdownChangeEvent) => setTransferMethod(e.value)}
              options={transferMethodOptions}
              placeholder='Cuentas'
              className='w-full md:w-14rem'
            />

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
                <h6>Inserte su comprobante aqui:</h6>

                <InputText
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className={classes.reference}>
                <h6>Ingrese el numero de referencia:</h6>
                <InputText
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className={classes.num_transfer}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Row className={classes.footer_buttons}>
        <Col xs={3} md={3} className={classes.Col}>
          <Button variant='naranja'>Cancelar</Button>{' '}
        </Col>
        <Col xs={3} md={3}>
          <Button variant='naranja'>Pagar</Button>
        </Col>
      </Row>
    </Dialog>
  );
};
