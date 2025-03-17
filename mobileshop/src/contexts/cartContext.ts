import { createContext } from "react";
import { CartProps } from "../types";

const CartContext = createContext({cart: [{ID:1}], setCart: (_val: CartProps[])=> {}})

export default CartContext