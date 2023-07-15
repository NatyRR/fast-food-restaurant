import { FC } from "react";
import { Container } from "react-bootstrap";
import classes from "@/styles/molecules/navbar/navbarAdmin.module.scss";
import { Button } from "@/components/atoms/Button";
// icons
import { PersonCircle } from "react-bootstrap-icons";

export const AdminNavbar: FC = () => {
  return (
    <Container className={classes.container} fluid>
      <div className={classes.title}>
        <h1>Order List</h1>
      </div>
      <div className={classes.button}>
        <Button variant="naranja">
          <div className="d-flex justify-content-between">
            <PersonCircle size={20} />
            <span>Admin</span>
          </div>
        </Button>
      </div>
    </Container>
  );
};
