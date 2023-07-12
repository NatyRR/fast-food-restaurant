// main tools
import { useState } from "react";

//components
import { Button } from "@/components/atoms/Button";
import { Extras } from "./Extras";
import { Food } from "./Food";

//Boostrap
import { Container } from "react-bootstrap";

// hooks
import { useShoppingCart } from "@/hooks/useShoppingCart";

//styles
import classes from "@/styles/organisms/Menu/menu.module.scss";

//types
import { FC } from "react";

export const Menu: FC = () => {
  const [extraStep, setExtraStep] = useState(false);
  const { handleShowForm } = useShoppingCart();

  return (
    <>
      <div className={classes.div_padre}>
        <Container className={classes.container}>
          {!extraStep ? <Food /> : <Extras />}

          <div className={classes.menu_buttons}>
            {extraStep && (
              <div className={classes.wrapper_button}>
                <Button variant="naranja" onClick={() => setExtraStep(false)}>
                  Atras
                </Button>
              </div>
            )}

            {!extraStep ? (
              <div className="w-100 d-flex justify-content-end">
                <div className={classes.wrapper_button}>
                  <Button variant="naranja" onClick={() => setExtraStep(true)}>
                    Siguiente
                  </Button>
                </div>
              </div>
            ) : (
              <div className={classes.wrapper_button} onClick={handleShowForm}>
                <Button variant="naranja">Pagar</Button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};
