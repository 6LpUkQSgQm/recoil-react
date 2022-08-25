import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      name: "Grapes",
      picture: "🍇",
      price: 3.98,
      id: 1,
    },
    {
      name: "Kiwi",
      picture: "🥝",
      price: 4.5,
      id: 2,
    },
    {
      name: "Hot",
      picture: "🌶",
      price: 17,
      id: 3,
    },
    {
      name: "Bagel",
      picture: "🥯",
      price: 9.5,
      id: 4,
    },
  ],
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});

export const filteredProducts = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const products = get(productState);
    const searchText = get(searchTextState);
    let filteredProducts = [];
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredProducts;
  },
});
