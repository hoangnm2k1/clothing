import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProcductsContext = createContext({
  products: [],
});
export const ProcductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProcductsContext.Provider value={value}>
      {children}
    </ProcductsContext.Provider>
  );
};
