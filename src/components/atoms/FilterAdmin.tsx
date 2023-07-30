import React from 'react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import classes from '@/styles/molecules/filter-admin/filter.module.scss';
import { Button } from '@/components/atoms/Button';
import { InvoiceStatusEnum } from '@/common/enums';

type FilterAdminProps = {
  handleFilter: (filter: keyof typeof InvoiceStatusEnum) => void;
};

export const FilterAdmin: FC<FilterAdminProps> = ({ handleFilter }) => {
  return (
    <Container className={classes.container}>
      <Button
        variant='naranja'
        onClick={() => handleFilter(InvoiceStatusEnum.paid)}
      >
        Pago
      </Button>
      <Button
        variant='naranja'
        onClick={() => handleFilter(InvoiceStatusEnum.pending)}
      >
        Pendiente
      </Button>
      <Button
        variant='naranja'
        onClick={() => handleFilter(InvoiceStatusEnum.cancelled)}
      >
        No Pago
      </Button>
    </Container>
  );
};
