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
    price: "2.000cop",
  },
  {
    imagen: "/asset/img/carneMechada1.jpg",
    sabor: "Carne mechada",
    info: "Price",
    price: "2.000cop",
  },
  {
    imagen: "/asset/img/pabellon.jpg",
    sabor: "Pabellon",
    info: "Price",
    price: "2.000cop",
  },
  {
    imagen: "/asset/img/jamonYQueso.jpg",
    sabor: "Jamon y queso",
    info: "Price",
    price: "2.000cop",
  },
  {
    imagen: "/asset/img/empanadaDeCarneM.jpg",
    sabor: "Carne molida",
    info: "Price",
    price: "2.000cop",
  },
  {
    imagen: "/asset/img/queso.jpg",
    sabor: "Queso",
    info: "Price",
    price: "2.000cop",
  },
];

export const listCardsExtras = [
  {
    imagen: "/asset/img/extrass/cocaColaLata1.jpg",
    sabor: "Coca-Cola",
    info: "Price",
    price: "3.000cop",
  },
  {
    imagen: "/asset/img/extrass/pepsiLata2.png",
    sabor: "Pepsi",
    info: "Price",
    price: "3.000cop",
  },
  {
    imagen: "/asset/img/extrass/7upLata.jpg",
    sabor: "7Up",
    info: "Price",
    price: "3.000cop",
  },
  {
    imagen: "/asset/img/extrass/salsaDeAjo.jpeg",
    sabor: "Salsa de ajo",
    info: "Price",
    price: "1.000cop",
  },
  {
    imagen: "/asset/img/extrass/salsaPicante.jpg",
    sabor: "Salsa picante",
    info: "Price",
    price: "1.000cop",
  },
  {
    imagen: "/asset/img/extrass/salsaTartara.jpg",
    sabor: "Salsa tartara",
    info: "Price",
    price: "1.000cop",
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
