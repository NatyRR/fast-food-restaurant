import { FC } from 'react';
import { Container } from 'react-bootstrap';
import classes from '@/styles/molecules/navbar/navbarAdmin.module.scss';
import { Button } from '@/components/atoms/Button';
// icons
import { PersonCircle } from 'react-bootstrap-icons';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

type Props = {
  page: string;
};

export const AdminNavbar: FC<Props> = ({ page }) => {
  const { data: session } = useSession();

  return (
    <Container className={classes.container} fluid>
      <div className={classes.title}>
        <h1>{page}</h1>
      </div>

      <div className={classes.items}>
        <Link href='/' className={classes.item_link}>
          <span>Inicio</span>
        </Link>
        <Link href='/admin' className={classes.item_link}>
          <span>Pedidos</span>
        </Link>
        <Link href='/admin/products' className={classes.item_link}>
          <span>Productos</span>
        </Link>

        <div className={classes.button}>
          <Button variant='naranja'>
            <div className='d-flex justify-content-between'>
              <PersonCircle size={20} />
              <span>{session?.user.name}</span>
            </div>
          </Button>
        </div>
      </div>
    </Container>
  );
};
