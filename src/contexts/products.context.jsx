import { createContext } from "react";
import { useState } from "react";
import PRODUCTS from "../shop-data.json";

export const productContext = createContext({})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )
}