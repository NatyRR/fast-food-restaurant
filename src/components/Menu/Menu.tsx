//components
import { Food } from "./food/Food";
import { Extras } from "./extrass/Extras";

//PrimeReact
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";

//Boostrap
import { Col, Container, Row } from "react-bootstrap";

//styles
import classes from "@/styles/organisms/Menu/menu.module.scss";

//types
import { FC, useState } from "react";
import { Button } from "@/atoms/Button";
import { FormPay } from "./FormPay";

export const Menu: FC = () => {
  const [activo, setActivo] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(!showModal);

  return (
    <>
      <div className={classes.div_padre}>
        <Container className={classes.container}>
          {activo ? <Food /> : <Extras />}

          <div className={classes.menu_buttons}>
            {!activo && (
              <div className={classes.wrapper_button}>
                <Button variant="naranja" onClick={() => setActivo(true)}>
                  Atras
                </Button>
              </div>
            )}

            {activo ? (
              <div className="w-100 d-flex justify-content-end">
                <div className={classes.wrapper_button}>
                  <Button variant="naranja" onClick={() => setActivo(false)}>
                    Siguiente
                  </Button>
                </div>
              </div>
            ) : (
              <div className={classes.wrapper_button} onClick={handleShow}>
                <Button variant="naranja">Pagar</Button>
              </div>
            )}
          </div>
        </Container>
      </div>

      <div className={classes.modal_container}>
        <FormPay showModal={showModal} handleShow={handleShow} />
      </div>
    </>
  );
};
