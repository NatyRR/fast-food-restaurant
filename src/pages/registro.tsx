// main tools
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import Link from 'next/link';

// components
import { initialState } from '@/components/organisms/Menu/utils';
import { Button } from '@/components/atoms/Button';

// bootstrap
import { Container } from 'react-bootstrap';

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
  const [data, setData] = useState(initialState);
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
    } else {
      const session = await getSession();
      if (session?.user.role === 'admin') replace('/administrador');
      else replace('/');
    }
    setLoading(false);
  };

  const checkPassword = useCallback(
    () => (data.password === confirmPassword ? true : false),
    [data.password, confirmPassword]
  );

  return (
    <Container className={classes.container} fluid>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.title}>
          <span>SIGN UP</span>
        </div>
        <div className={classes.name_lastName}>
          <InputText
            className={classes.input_text}
            name='name'
            placeholder='Nombre'
            value={data.name}
            onChange={handleChange}
          />

          <InputText
            className={classes.input_text}
            placeholder='Apellido'
            name='lastName'
            value={data.lastName}
            onChange={handleChange}
          />
        </div>

        <InputText
          className={classes.input_email}
          type='email'
          placeholder='Correo Electronico'
          name='email'
          value={data.email}
          onChange={handleChange}
        />

        <Password
          className={classes.input_password}
          type='Password'
          placeholder='Contraseña'
          name='password'
          value={data.password}
          onChange={handleChange}
        />
        <Password
          className={classes.input_password}
          type='password'
          placeholder='Confirmar Contraseña'
          name='password'
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
          placeholder='Numero de telefono'
          name='phone'
          value={data.phone}
          onChange={handleChange}
        />

        <div className={classes.text_button}>
          <Link href={'#'} className={classes.link}>
            <span>
              Clik here to <b>login</b>
            </span>
          </Link>

          <div className={classes.button_link}>
            <Button type='submit' variant='naranja'>
              SUBMIT
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
