// Main tools
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

//components
import { Button } from '@/components/atoms/Button';

//Boostrap
import { Container, Image } from 'react-bootstrap';

//icons
import {
  Person,
  JournalText,
  BoxArrowInLeft,
  BoxArrowInRight,
} from 'react-bootstrap-icons';

//styles
import classes from '@/styles/molecules/navbar/navbar.module.scss';

//types
import { FC } from 'react';

export const Navbar: FC = () => {
  const { replace } = useRouter();
  const { data: session } = useSession();
  const handleRoute = (route: string) => replace(route);

  return (
    <Container className={classes.container} fluid>
      <div className={classes.logo}>
        <Image src='/asset/img/empanada3.jpg' alt='empanada logo' />
      </div>

      <div className={classes.items}>
        <Link href='#' className={classes.item_link}>
          <JournalText color='orange' size={25} />
          <span>Pedidos</span>
        </Link>

        {!session ? (
          <>
            <Link href='/login' className={classes.item_link}>
              <BoxArrowInRight color='orange' size={25} />
              <span>Login</span>
            </Link>

            <div>
              <Button
                variant='naranja'
                onClick={() => handleRoute('/registro')}
              >
                Registrate
              </Button>
            </div>
          </>
        ) : (
          <>
            {session.user?.role === 'admin' && (
              <Link href='/login' className={classes.item_link}>
                <Person color='orange' size={25} />
                <span>Panel de administrador</span>
              </Link>
            )}

            <div
              role='button'
              className={classes.item_link}
              onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
            >
              <BoxArrowInLeft color='orange' size={25} />
              <span>Logout</span>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};
