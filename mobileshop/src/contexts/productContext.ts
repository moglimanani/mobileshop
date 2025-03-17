import { createContext } from "react";
import { ProductsProps } from "../types";

const ProductContext = createContext({ products: [{ID:1}], setProducts: (_val: ProductsProps[]) => { } })

export default ProductContext