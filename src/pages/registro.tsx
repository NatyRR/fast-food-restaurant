// main tools
import { getSession, signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// components
import { initialStateRegistro } from '@/components/organisms/auth/utils';
import { Button } from '@/components/atoms/Button';

// bootstrap
import { Container, Image } from 'react-bootstrap';

// prime react
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

// hooks
import { useApp } from '@/hooks/useApp';

// styles
import classes from '@/styles/molecules/registro/registro.module.scss';

export default function Registro() {
  const { toast } = useApp();
  const { replace } = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialStateRegistro);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (!checkPassword()) {
      toast()?.show({
        summary: 'Error',
        severity: 'error',
        detail: 'Las contraseñas no coinciden',
      });
      return;
    }

    const signUpData = {
      ...data,
      address: '',
      name: `${data.name} ${data.lastName}`,
    };

    const res = await signIn('signup', { ...signUpData, redirect: false });
    if (res?.error) {
      setLoading(false);
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: res.error,
      });
      return;
    } else replace('/');
    setLoading(false);
  };

  const checkPassword = useCallback(
    () => (data.password === confirmPassword ? true : false),
    [data.password, confirmPassword]
  );

  return (
    <Container className={classes.container} fluid>
      <div className={classes.logo}>
        <Image src='/asset/img/empanada3.jpg' alt='logo' />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.title}>
          <span>SIGN UP</span>
        </div>
        <div className={classes.name_lastName}>
          <InputText
            name='name'
            placeholder='Nombre'
            value={data.name}
            onChange={handleChange}
            className={classes.input_text}
          />

          <InputText
            name='lastName'
            value={data.lastName}
            onChange={handleChange}
            placeholder='Apellido'
            className={classes.input_text}
          />
        </div>

        <InputText
          type='email'
          name='email'
          value={data.email}
          onChange={handleChange}
          placeholder='Correo Electronico'
          className={classes.input_email}
        />

        <Password
          type='Password'
          name='password'
          value={data.password}
          onChange={handleChange}
          placeholder='Contraseña'
          className={classes.input_password}
        />
        <Password
          type='password'
          name='password'
          value={confirmPassword}
          placeholder='Confirmar Contraseña'
          className={classes.input_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {!checkPassword() && (
          <span className={classes.span_password}>
            Las contraseñas no coinciden
          </span>
        )}

        <InputText
          name='phone'
          value={data.phone}
          onChange={handleChange}
          placeholder='Numero de telefono'
          className={classes.input_number}
        />

        <div className={classes.text_button}>
          <Link href={'/login'} className={classes.link}>
            <span>
              Click <b>Aqui</b> para iniciar sesion
            </span>
          </Link>

          <div className={classes.button_link}>
            <Button type='submit' variant='naranja' loading={loading}>
              Registrarse
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
