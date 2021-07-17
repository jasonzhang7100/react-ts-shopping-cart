import { CartItemType } from '../types/CartItemType';

export const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();
