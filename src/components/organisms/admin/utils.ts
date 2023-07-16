export const order = {
  id: "1",
  status: "pending",
  address: "francisco solorzano",
  user: {
    id: "1",
    name: "francisco",
  },
  invoice: {
    id: "1",
    total: 100,
    status: "paid",
  },
  products: [
    {
      id: "1",
      name: "empanada",
      flaver: "pollo",
      price: 10,
      quantity: 10,
    },
    {
      id: "2",
      name: "empanada",
      flaver: "carne",
      price: 10,
      quantity: 10,
    },
  ],
};

export const orders = [
  {
    id: "1",
    status: "pending",
    address: "francisco solorzano",
    user: {
      id: "1",
      name: "francisco",
    },
    invoice: {
      id: "1",
      total: 100,
      status: "paid",
    },
    products: [
      {
        id: "1",
        name: "empanada",
        flaver: "pollo",
        price: 10,
        quantity: 10,
      },
      {
        id: "2",
        name: "empanada",
        flaver: "carne",
        price: 10,
        quantity: 10,
      },
    ],
  },
  {
    id: "2",
    status: "competed",
    address: "centro de guayaquil",
    user: {
      id: "2",
      name: "jorge",
    },
    invoice: {
      id: "1",
      total: 100,
      status: "paid",
    },
    products: [
      {
        id: "1",
        name: "empanada",
        flaver: "carne",
        price: 10,
        quantity: 2,
      },
      {
        id: "2",
        name: "empanada",
        flaver: "pollo",
        price: 10,
        quantity: 2,
      },
      {
        id: "3",
        name: "refresco",
        flaver: "coca cola",
        price: 10,
        quantity: 2,
      },
    ],
  },
];
