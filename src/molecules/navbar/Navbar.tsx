// Main tools
import Link from "next/link";

//components
import { Button } from "@/atoms/Button";

//Boostrap
import { Container, Image } from "react-bootstrap";

//icons
import { JournalText, BoxArrowInRight } from "react-bootstrap-icons";

//styles
import classes from "@/styles/molecules/navbar/navbar.module.scss";

//types
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <Container className={classes.container} fluid>
      <div className={classes.logo}>
        <Image src="/asset/img/empanada3.jpg" alt="empanada logo" />
      </div>

      <div className={classes.items}>
        <Link href="#" className={classes.item_link}>
          <JournalText color="orange" size={25} />
          <span>Pedidos</span>
        </Link>

        <Link href="#" className={classes.item_link}>
          <BoxArrowInRight color="orange" size={25} />
          <span>Login</span>
        </Link>

        <Link href="#">
          <Button variant="naranja">Registrate</Button>
        </Link>
      </div>
    </Container>
  );
};
