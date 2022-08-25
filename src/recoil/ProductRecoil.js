import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      name: "Grapes",
      picture: "🍇",
      price: 481,
      type: "fruit",
      id: 1,
    },
    {
      name: "Grapes",
      picture: "🍇",
      price: 481,
      type: "fruit",
      id: 1,
    },
    {
      name: "Grapes",
      picture: "🍇",
      price: 481,
      type: "fruit",
      id: 1,
    },
  ],
});
