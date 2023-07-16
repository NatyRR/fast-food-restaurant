// main tools
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

// components
import { Button } from '@/components/atoms/Button';

// bootstratp
import { Container, Image } from 'react-bootstrap';

// prime react
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

// hooks
import { useApp } from '@/hooks/useApp';

// utils
import { initialStateLogin } from '@/components/organisms/auth/utils';

// styles
import classes from '@/styles/molecules/login/login.module.scss';

export default function Login() {
  const { toast } = useApp();
  const { replace } = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialStateLogin);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn('signin', { ...data, redirect: false });
    if (res?.error) {
      setLoading(false);
      toast()?.show({
        severity: 'error',
        summary: 'Error',
        detail: res.error,
      });
      return;
    } else {
      const session = await getSession();
      if (session?.user.role === 'admin') replace('/administrador');
      else replace('/');
    }
    setLoading(false);
  };

  return (
    <Container className={classes.container} fluid>
      <div className={classes.logo}>
        <Image src='/asset/img/empanada3.jpg' alt='logo' />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className='w-100'>
          <InputText
            type='email'
            name='email'
            value={data.email}
            onChange={handleChange}
            className={classes.input_email}
            placeholder='Correo Electronico'
          />
        </div>

        <div className='w-100'>
          <Password
            feedback={false}
            type='Password'
            name='password'
            value={data.password}
            onChange={handleChange}
            placeholder='Contraseña'
            className={classes.input_password}
          />
        </div>

        <Button
          type='submit'
          variant='naranja'
          loading={loading}
          className={classes.button}
        >
          Iniciar sesion
        </Button>
      </form>

      <div className={classes.registro}>
        <span>¿No tienes cuenta?</span>
        <Link href='/registro' className={classes.link}>
          <b>Registrate</b>
        </Link>
      </div>
    </Container>
  );
}
