// src/types.ts

export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
};


export type CartItem = {
  product: Product;
  quantity: number;
};
