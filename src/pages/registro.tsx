//main tools
import { useEffect, useState } from "react";

// components
import { Button } from "@/components/atoms/Button";

//boostrap
import { Container, Image } from "react-bootstrap";

import Link from "next/link";
//primeReact
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

//styles
import classes from "@/styles/molecules/registro/registro.module.scss";

//utils
import { initialStateRegistro } from "@/components/organisms/Menu/utils";

export default function Registro() {
  const [data, setData] = useState(initialStateRegistro);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data, confirmPassword);
  };

  const checkPassword = () =>
    data.password === confirmPassword ? true : false;

  useEffect(() => {
    if (checkPassword()) {
      console.log("coinciden");
    } else {
      console.log("No coinciden");
    }
  }, [data.password, confirmPassword]);

  return (
    <Container className={classes.container} fluid>
      <div className={classes.logo}>
        <Image src="/asset/img/empanada3.jpg" alt="logo" />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.title}>
          <span>SIGN UP</span>
        </div>
        <div className={classes.name_lastName}>
          <InputText
            className={classes.input_text}
            name="name"
            placeholder="Nombre"
            value={data.name}
            onChange={handleChange}
          />

          <InputText
            className={classes.input_text}
            placeholder="Apellido"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>

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
        <Password
          className={classes.input_password}
          type="password"
          placeholder="Confirmar Contraseña"
          name="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {!checkPassword() && (
          <span className={classes.span_password}>
            Las contraseñas no coinciden
          </span>
        )}

        <InputText
          className={classes.input_number}
          placeholder="Numero de telefono"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />

        <div className={classes.text_button}>
          <Link href="/login" className={classes.link}>
            <span>
              Clik here to <b>login</b>
            </span>
          </Link>

          <div className={classes.button_link}>
            <Button variant="naranja">SUBMIT</Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
