export const paymentMethodEnum = Object.freeze({
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
});

export const effectiveMethodEnum = Object.freeze({
  DOLLARS: 'DOLLARS',
  PESOS: 'PESOS',
});

export const transferMethodEnum = Object.freeze({
  DAVI_PLATA: 'DAVIPLATA',
  BANCOLOMBIA: 'BANCOLOMBIA',
  BANCO_DE_VENEZUELA: 'BANCO DE VENEZUELA',
});

export const adminStatusEnum = Object.freeze({
  PEDIDO_POR_CANCELAR: '',
  PEDIDO_CANCELADO: '',
  ENTREGADO: '',
});

export const orderStatusEnum = Object.freeze({
  pending: 'pending',
  in_progress: 'in_progress',
  done: 'done',
});

export const InvoiceStatusEnum = Object.freeze({
  paid: 'paid',
  pending: 'pending',
  cancelled: 'cancelled',
});

export const statusProductEnum = Object.freeze({
  active: 'active',
  inactive: 'inactive',
});
