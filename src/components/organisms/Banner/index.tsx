// components
import { Button } from '@/components/atoms/Button';

// Boostrap
import { Row, Col, Image, Container } from 'react-bootstrap';

//Prime react
import { Carousel } from 'primereact/carousel';

//utils
import { panels } from './utils';

// styles
import classes from '@/styles/organisms/banner.module.scss';

// types
import { PanelType } from './utils';
import { FC } from 'react';

export const Banner: FC = () => {
  const templatePanel = (panel: PanelType) => {
    return (
      <Row className={classes.container_template}>
        <Col xs={12} md={6} className={classes.text_container}>
          <div className={classes.title}>
            <h1>{panel.titulo[0]}</h1>
          </div>

          <div className={classes.textos}>
            <p>{panel.textos[0]}</p>
          </div>

          <div className={classes.button}>
            <Button variant='naranja'>Registrate</Button>
          </div>
        </Col>

        <Col xs={12} md={6} className={classes.imagen}>
          <Image src={panel.imagen[0]} alt='imagen' />
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Container>
        <Carousel
          circular
          numScroll={1}
          value={panels}
          numVisible={1}
          autoplayInterval={3000}
          itemTemplate={templatePanel}
          className={classes.carousel}
        />
      </Container>
    </div>
  );
};
