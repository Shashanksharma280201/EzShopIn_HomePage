// src/lib/atoms.ts
import { atom } from "jotai";
import { Products } from "@/Data/Products";
import { Product, CartItem } from "@/types";

export const cartAtom = atom<CartItem[]>(
  []
);

export const cartItemQuantityAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  return totalQuantity;
});

export const cartItemValueAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalValue = cartItems.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);

  return totalValue;
});
