import { initialStateLogin } from "@/components/organisms/Menu/utils";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import classes from "@/styles/molecules/login/login.module.scss";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export default function Login() {
  const [data, setData] = useState(initialStateLogin);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  return (
    <Container className={classes.container} fluid>
      <div className={classes.logo}>
        <Image src="/asset/img/empanada3.jpg" alt="logo" />
      </div>
      <form className={classes.form}>
        <InputText
          className={classes.input_email}
          type="email"
          placeholder="Correo Electronico"
          name="email"
          value={data.email}
          onChange={handleChange}
        />

        <Password
          className={classes.input_password}
          type="Password"
          placeholder="Contraseña"
          name="password"
          value={data.password}
          onChange={handleChange}
        />

        <Link href="#">
          <Button variant="naranja" className={classes.button}>
            Iniciar sesion
          </Button>
        </Link>
      </form>

      <div className={classes.registro}>
        <span>¿No tienes cuenta?</span>
        <Link href="/registro" className={classes.link}>
          <b>Registrate</b>
        </Link>
      </div>
    </Container>
  );
}
