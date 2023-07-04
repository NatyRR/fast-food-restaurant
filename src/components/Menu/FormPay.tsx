import { FC, useState } from "react";
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import classes from "@/styles/organisms/Menu/dialog.module.scss";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {
  effectiveMethodOptions,
  paymentMethodOptions,
  transferMethodOptions,
} from "./utils";
import { InputNumber } from "primereact/inputnumber";
import { Col, Row } from "react-bootstrap";
import { Button } from "@/atoms/Button";
import { paymentMethodEnum } from "@/common/enums";

type DialogProps = {
  showModal: boolean;
  handleShow: () => void;
};

export const FormPay: FC<DialogProps> = ({ showModal, handleShow }) => {
  const [delivery, setDelivery] = useState(false);
  const [selectedMethod, setSelectedMethod] =
    useState<keyof typeof paymentMethodEnum>();
  const [effectiveMethod, setEffectiveMethod] = useState("");
  const [moneyCash, setMoneyCash] = useState<number | null>(null);
  const [transferMethod, setTransferMethod] = useState("");

  return (
    <Dialog
      header="Formulario de pago"
      visible={showModal}
      style={{ width: "50vw" }}
      onHide={handleShow}
      draggable={false}
      resizable={false}
      className={classes.modal}
    >
      <div className={classes.delivery}>
        <h4>¿Desea incluir servicio de delivery?</h4>
        <div className="flex align-items-center">
          <RadioButton
            inputId="ingredient1"
            name="si"
            value="Si"
            onChange={(e) => setDelivery(true)}
            checked={delivery}
          />
          <label htmlFor="Opcion1" className="ml-2">
            Si
          </label>
        </div>
        <div className="flex align-items-center">
          <RadioButton
            inputId="Opcion2"
            name="No"
            value="No"
            onChange={(e) => setDelivery(false)}
            checked={!delivery}
          />
          <label htmlFor="ingredient1" className="ml-2">
            No
          </label>
        </div>
      </div>

      <div className={classes.paymentMethod}>
        <h4>Metodos de pago</h4>
        <div className={classes.paymentMethod}>
          <Dropdown
            value={selectedMethod}
            onChange={(e: DropdownChangeEvent) => setSelectedMethod(e.value)}
            options={paymentMethodOptions}
            placeholder="Selecciona tu metodo"
            className="w-full md:w-14rem"
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
                placeholder="Divisas"
                className="w-full md:w-14rem"
              />
            </div>
            <div className={classes.input_num}>
              <span>Monto de billete a pagar:</span>
              <InputNumber
                inputId="integeronly"
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
              placeholder="Cuentas"
              className="w-full md:w-14rem"
            />
          </div>
        )}
      </div>

      <Row className={classes.footer_buttons}>
        <Col xs={12} md={6}>
          <Button variant="naranja">Atras</Button>{" "}
        </Col>
        <Col xs={12} md={6}>
          <Button variant="naranja">Pagar</Button>
        </Col>
      </Row>
    </Dialog>
  );
};
