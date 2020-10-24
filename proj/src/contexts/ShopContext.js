import React, { useContext, useState, useEffect } from "react";
import { add, total } from "cart-localstorage";
import products from '../components/Shop/Products';

const ShopContext = React.createContext();

export function useShop() {
  return useContext(ShopContext);
}

export default function ShopProvider({ children }) {
  
  function addToCart(id, quantity) {
    let product = products.find(m => m.id == id);
    if (!product) throw new Error("what the fuck is wrong with you my g?");
    else add(product, quantity);
  }


  const value = {
    addToCart
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
