import { UserDataType } from './user';
import { InvoiceDataType } from './invoice';
import { ProductDataType } from './shoppingCart';

export type OrderDataType = {
  id?: number;
  orderId: number;
  status?: string;
  address?: string;
  User?: UserDataType;
  Invoice?: InvoiceDataType;
  OrderItems?: ProductDataType[];
  createdAt?: string;
  updatedAt?: string;
};
