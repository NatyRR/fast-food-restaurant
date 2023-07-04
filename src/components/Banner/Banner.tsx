// components
import { Button } from "@/atoms/Button";

// Boostrap
import { Row, Col, Image, Container } from "react-bootstrap";

//Prime react
import { Carousel } from "primereact/carousel";

//utils
import { panels } from "./utils";

// styles
import classes from "@/styles/organisms/banner.module.scss";

// types
import { PanelType } from "./utils";
import { FC } from "react";

export const Banner: FC = () => {
  const templatePanel = (panel: PanelType) => {
    return (
      <Row className={classes.container_template}>
        <Col xs={12} md={6}>
          <div className={classes.title}>
            <h1>{panel.titulo[0]}</h1>
          </div>

          <div className={classes.textos}>
            <p>{panel.textos[0]}</p>
          </div>

          <div className={classes.button}>
            <Button variant="naranja">Registrate</Button>
          </div>
        </Col>

        <Col xs={12} md={6} className={classes.imagen}>
          <Image src={panel.imagen[0]} alt="imagen" />
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Container>
        <Carousel
          value={panels}
          numVisible={1}
          numScroll={1}
          className={classes.carousel}
          circular
          autoplayInterval={3000}
          itemTemplate={templatePanel}
        />
      </Container>
    </div>
  );
};
