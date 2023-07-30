import { FC } from "react";
import {
  Container,
  Image,
  Navbar as BsNavbar,
  Offcanvas,
} from "react-bootstrap";
import classes from "@/styles/molecules/navbar/navbarAdmin.module.scss";
import { Button } from "@/components/atoms/Button";
// icons
import { JournalText, PersonCircle } from "react-bootstrap-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {
  page: string;
};

export const AdminNavbar: FC<Props> = ({ page }) => {
  const { data: session } = useSession();

  return (
    <Container className={classes.container} fluid>
      <div className={classes.desktop}>
        <div className={classes.title}>
          <h1>{page}</h1>
        </div>

        <div className={classes.items}>
          <Link href="/" className={classes.item_link}>
            <span>Inicio</span>
          </Link>
          <Link href="/admin" className={classes.item_link}>
            <span>Pedidos</span>
          </Link>
          <Link href="/admin/products" className={classes.item_link}>
            <span>Productos</span>
          </Link>

          <div className={classes.button}>
            <Button variant="naranja">
              <div className="d-flex justify-content-between">
                <PersonCircle size={20} />
                <span>{session?.user.name}</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <BsNavbar className={classes.menuMobile} expand={false} variant="dark">
        <BsNavbar.Brand>
          <div className={classes.Title}>
            <h1>{page}</h1>
          </div>
        </BsNavbar.Brand>
        <BsNavbar.Toggle className={classes.toggle} />
        <BsNavbar.Offcanvas className={classes.sidebar} placement="end">
          <Offcanvas.Body className={classes.sidebar_body}>
            <div className={classes.logo_body}>
              <Image src="/asset/img/empanada3.jpg" alt="logo" width={40} />
            </div>
            <div className={classes.items_mobile}>
              <Link href="/" className={classes.item_link}>
                <JournalText color="orange" size={25} />
                <span>Inicio</span>
              </Link>
              <Link href="/admin" className={classes.item_link}>
                <JournalText color="orange" size={25} />
                <span>Pedidos</span>
              </Link>
              <Link href="/admin/products" className={classes.item_link}>
                <JournalText color="orange" size={25} />
                <span>Productos</span>
              </Link>
            </div>
          </Offcanvas.Body>
        </BsNavbar.Offcanvas>
      </BsNavbar>
    </Container>
  );
};
