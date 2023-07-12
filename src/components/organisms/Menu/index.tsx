// main tools
import { useState } from "react";

//components
import { Button } from "@/components/atoms/Button";
import { Extras } from "./Extras";
import { FormPay } from "./FormPay";
import { Food } from "./Food";

//Boostrap
import { Container } from "react-bootstrap";

//styles
import classes from "@/styles/organisms/Menu/menu.module.scss";

//types
import { FC } from "react";

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
