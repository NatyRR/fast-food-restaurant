// Main tools
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

//components
import { Button } from '@/components/atoms/Button';

//Boostrap
import {
  Container,
  Image,
  Navbar as BsNavbar,
  Offcanvas,
} from 'react-bootstrap';

//icons
import {
  Person,
  JournalText,
  BoxArrowInLeft,
  BoxArrowInRight,
  PersonCircle,
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
      <div className={classes.desktop}>
        <div className={classes.logo}>
          <Image src='/asset/img/empanada3.jpg' alt='empanada logo' />
        </div>

        <div className={classes.items}>
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
              <Link href='/orders' className={classes.item_link}>
                <JournalText color='orange' size={25} />
                <span>Pedidos</span>
              </Link>
              {session.user?.role === 'admin' && (
                <Link href='/admin' className={classes.item_link}>
                  <Person color='orange' size={25} />
                  <span>admin</span>
                </Link>
              )}

              <div className={classes.button}>
                <Button variant='naranja'>
                  <div className='d-flex justify-content-between'>
                    <PersonCircle size={20} />
                    <span>{session?.user.name}</span>
                  </div>
                </Button>
              </div>

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
      </div>

      <BsNavbar className={classes.menuMobile} expand={false} variant='dark'>
        <BsNavbar.Brand>
          <div className={classes.logo_mobile}>
            <Image src='/asset/img/empanada3.jpg' alt='logo' width={70} />
          </div>
        </BsNavbar.Brand>
        <BsNavbar.Toggle className={classes.toggle} />
        <BsNavbar.Offcanvas className={classes.sidebar} placement='end'>
          <Offcanvas.Body className={classes.sidebar_body}>
            <div className={classes.logo_body}>
              <Image src='/asset/img/empanada3.jpg' alt='logo' width={40} />
            </div>
            <div className={classes.items_mobile}>
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
                      <span>admin</span>
                    </Link>
                  )}

                  <div
                    role='button'
                    className={classes.item_link}
                    onClick={() =>
                      signOut({ redirect: true, callbackUrl: '/' })
                    }
                  >
                    <BoxArrowInLeft color='orange' size={25} />
                    <span>Logout</span>
                  </div>
                </>
              )}
            </div>
          </Offcanvas.Body>
        </BsNavbar.Offcanvas>
      </BsNavbar>
    </Container>
  );
};
