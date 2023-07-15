export type ShoppingCartDataType = {
  amount?: number;
  items?: ProductDataType[];
};

export type ProductDataType = {
  id?: number;
  flaver?: string;
  name?: string;
  price?: number;
  img?: string;
  quantity?: number;
};
