import { InvoiceStatusEnum, orderStatusEnum } from "@/common/enums";

export const order = {
  id: "1",
  status: "pending",
  address: "francisco solorzano",
  user: {
    id: "1",
    name: "ramus",
  },
  invoice: {
    id: "1",
    total: 100,
    status: "paid",
  },
  products: [
    {
      id: "1",
      name: "empanada de",
      flaver: "pollo",
      price: 10,
      quantity: 10,
    },
    {
      id: "2",
      name: "empanada de",
      flaver: "carne",
      price: 10,
      quantity: 10,
    },
  ],
};

export const orders = [
  {
    id: 4,
    status: "pendiente",
    address: "francisco solorzano",
    createdAt: "14/05/23",
    user: {
      id: 1,
      name: "ramus",
    },
    invoice: {
      id: 121,
      total: 100,
      status: "paid",
    },
    products: [
      {
        id: 1,
        name: "- Empanada de",
        flaver: "pollo",
        price: 10,
        quantity: 10,
      },
      {
        id: 2,
        name: "- Empanada de",
        flaver: "carne",
        price: 10,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    status: "entregado",
    address: "centro de guayaquil",
    createdAt: "14/05/23",
    user: {
      id: 2,
      name: "cj",
    },
    invoice: {
      id: 122,
      total: 100,
      status: "paid",
    },
    products: [
      {
        id: 1,
        name: "- Empanada de",
        flaver: "carne",
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        name: "- Empanada de",
        flaver: "pollo",
        price: 10,
        quantity: 2,
      },
      {
        id: 3,
        name: "- Refresco",
        flaver: "coca cola",
        price: 10,
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    status: "entregado",
    address: "centro de guayaquil",
    createdAt: "14/05/23",
    user: {
      id: 3,
      name: "nat",
    },
    invoice: {
      id: 123,
      total: 100,
      status: "paid",
    },
    products: [
      {
        id: 1,
        name: "- Empanada de",
        flaver: "carne",
        price: 15,
        quantity: 2,
      },
      {
        id: 2,
        name: "- Empanada de",
        flaver: "pollo",
        price: 12,
        quantity: 2,
      },
      {
        id: 3,
        name: "- Refresco",
        flaver: "coca cola",
        price: 10,
        quantity: 2,
      },
    ],
  },
  {
    id: 1,
    status: "entregado",
    address: "centro de guayaquil",
    createdAt: "14/05/23",
    user: {
      id: 2,
      name: "jorge",
    },
    invoice: {
      id: 122,
      total: 100,
      status: "paid",
    },
    products: [
      {
        id: 1,
        name: "- Empanada de",
        flaver: "carne",
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        name: "- Empanada de",
        flaver: "pollo",
        price: 10,
        quantity: 2,
      },
      {
        id: 3,
        name: "- Refresco",
        flaver: "coca cola",
        price: 10,
        quantity: 2,
      },
    ],
  },
];

export const products = [
  {
    id: 1,
    stock: 100,
    price: 2000,
    flavor: "pino",
    name: "empanada",
    status: "active",
    description: "una sabrosa empanada de pino",
    img: "https://www.defer.cl/img/p/1/6/3/163-thickbox_default.jpg",
  },
];

export const statusOrder = [
  {
    label: "Pendiente",
    value: orderStatusEnum.PENDING,
  },
  {
    label: "En progreso",
    value: orderStatusEnum.IN_PROGRESS,
  },
  {
    label: "Entregado",
    value: orderStatusEnum.DONE,
  },
];

export const statusInvoiceOptions = [
  {
    label: "Pendiente",
    value: InvoiceStatusEnum.PENDING,
  },
  {
    label: "Pago",
    value: InvoiceStatusEnum.PAID,
  },
  {
    label: "Cancelado",
    value: InvoiceStatusEnum.CANCELLED,
  },
];
