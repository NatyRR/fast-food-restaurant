export type ShoppingCartDataType = {
  amount?: number;
  items?: ProductDataType[];
};

export type ProductDataType = {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  status?: string;
  flavor?: string;
  quantity?: number;
  createdAt?: string;
  updatedAt?: string;
  principal?: boolean;
  description?: string;
};
