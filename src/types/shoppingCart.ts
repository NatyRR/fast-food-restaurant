export type ShoppingCartDataType = {
  amount: number;
  items: ItemDataType[];
};

export type ItemDataType = {
  name: string;
  price: number;
  img: string;
  quantity: number;
};
