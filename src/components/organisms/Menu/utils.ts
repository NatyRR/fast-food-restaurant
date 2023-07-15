import {
  effectiveMethodEnum,
  paymentMethodEnum,
  transferMethodEnum,
} from "@/common/enums";

export const listCards = [
  {
    imagen: "/asset/img/empanadaDePollo.jpg",
    sabor: "Pollo",
    info: "Price",
    price: 2000,
  },
  {
    imagen: "/asset/img/carneMechada1.jpg",
    sabor: "Carne mechada",
    info: "Price",
    price: 2000,
  },
  {
    imagen: "/asset/img/pabellon.jpg",
    sabor: "Pabellon",
    info: "Price",
    price: 2000,
  },
  {
    imagen: "/asset/img/jamonYQueso.jpg",
    sabor: "Jamon y queso",
    info: "Price",
    price: 2000,
  },
  {
    imagen: "/asset/img/empanadaDeCarneM.jpg",
    sabor: "Carne molida",
    info: "Price",
    price: 2000,
  },
  {
    imagen: "/asset/img/queso.jpg",
    sabor: "Queso",
    info: "Price",
    price: 2000,
  },
];

export const listCardsExtras = [
  {
    imagen: "/asset/img/extrass/cocaColaLata1.jpg",
    sabor: "Coca-Cola",
    info: "Price",
    price: 3000,
  },
  {
    imagen: "/asset/img/extrass/pepsiLata2.png",
    sabor: "Pepsi",
    info: "Price",
    price: 3000,
  },
  {
    imagen: "/asset/img/extrass/7upLata.jpg",
    sabor: "7Up",
    info: "Price",
    price: 3000,
  },
  {
    imagen: "/asset/img/extrass/salsaDeAjo.jpeg",
    sabor: "Salsa de ajo",
    info: "Price",
    price: 500,
  },
  {
    imagen: "/asset/img/extrass/salsaPicante.jpg",
    sabor: "Salsa picante",
    info: "Price",
    price: 500,
  },
  {
    imagen: "/asset/img/extrass/salsaTartara.jpg",
    sabor: "Salsa tartara",
    info: "Price",
    price: 500,
  },
];

export const paymentMethodOptions = [
  {
    label: "Efectivo",
    value: paymentMethodEnum.CASH,
  },

  {
    label: "Transferencia",
    value: paymentMethodEnum.TRANSFER,
  },
];

export const effectiveMethodOptions = [
  {
    label: "Dolares",
    value: effectiveMethodEnum.DOLLARS,
  },

  {
    label: "Pesos",
    value: effectiveMethodEnum.PESOS,
  },
];

export const transferMethodOptions = [
  {
    label: "DaviPlata",
    value: transferMethodEnum.DAVI_PLATA,
  },

  {
    label: "Bancolombia",
    value: transferMethodEnum.BANCOLOMBIA,
  },
  {
    label: "Banco de venezuela",
    value: transferMethodEnum.BANCO_DE_VENEZUELA,
  },
];

export const accountInformation = [
  {
    cuenta: transferMethodEnum.DAVI_PLATA,
    numero_de_cuenta: 55555555556,
    cedula: 1111000,
    tipo_de_cuenta: "Ahorro",
  },
  {
    cuenta: transferMethodEnum.BANCO_DE_VENEZUELA,
    numero_de_cuenta: 22222222228,
    cedula: 3444476,
    tipo_de_cuenta: "corriente",
  },
  {
    cuenta: transferMethodEnum.BANCOLOMBIA,
    numero_de_cuenta: 88888888124,
    cedula: 4444442,
    tipo_de_cuenta: "Ahorro",
  },
];

export const initialStateLogin = {
  email: "",
  password: "",
};
export const initialStateRegistro = {
  name: "",
  email: "",
  phone: "",
  password: "",
  lastName: "",
};
