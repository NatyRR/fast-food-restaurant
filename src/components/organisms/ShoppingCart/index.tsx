import React, { FC } from "react";

// compoents
import { ProductCard } from "@/components/molecules/productCard";
import { Button } from "@/components/atoms/Button";

// bootstrap
import { Col, Row } from "react-bootstrap";

// icons
import { CaretRight } from "react-bootstrap-icons";

// prime react
import { Sidebar } from "primereact/sidebar";

// styles
import classes from "@/styles/molecules/shoppingCart/styles.module.scss";
import { ShoppingCartDataType } from "@/types/shoppingCart";

type ShoppingCartProps = {
  show: boolean;
  handleShow: () => void;
  handleShowForm: () => void;
  shoppingCartState: ShoppingCartDataType;
};

export const ShoppingCard: FC<ShoppingCartProps> = ({
  show,
  handleShow,
  handleShowForm,
  shoppingCartState,
}) => {
  return (
    <Sidebar
      visible={show}
      position="right"
      onHide={handleShow}
      showCloseIcon={false}
      className={classes.sidebar}
    >
      <div className={classes.container}>
        <div className={classes.title_control}>
          <h4>Carrito de compras</h4>
          <div className={classes.icon} onClick={handleShow}>
            <CaretRight size={20} />
          </div>
        </div>

        <Row className="gap-3">
          {shoppingCartState.items?.map((item, index) => (
            <Col xs={12} key={index}>
              <ProductCard
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            </Col>
          ))}
          <Col xs={12}>
            <div className="w-100 d-flex gap-2 align-items-center ">
              <div className="d-flex gap-2 ">
                <span>Total: </span>
                <span>{shoppingCartState.amount}$</span>
              </div>
              <Row className="w-100 justify-content-end">
                <Col xs={6}>
                  <Button variant="naranja" onClick={handleShowForm}>
                    Pagar
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Sidebar>
  );
};
