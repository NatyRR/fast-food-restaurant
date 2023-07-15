import { UserDataType } from "./user";
import { InvoiceDataType } from "./invoice";
import { ProductDataType } from "./shoppingCart";
export type OrderDataType = {
  id?: number;
  status?: string;
  address?: string;
  user?: UserDataType;
  invoice?: InvoiceDataType;
  products?: ProductDataType;
};
