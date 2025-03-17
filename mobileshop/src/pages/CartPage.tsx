import { memo, useContext } from "react"
import CartContext from "../contexts/cartContext"
import { CartProps } from "../types"

const CartPage = () => {
    const { cart } = useContext(CartContext)
    // return <h1>cart</h1>
    
    return cart.map((item: CartProps) => (
        <ul key={item.ID}>
            <li>Id: {item.ID}</li>
            <li>Name: {item.Name}</li>
            <li>SKU: {item.SKU}</li>
            <li>Quatity: {item.quantity}</li>
        </ul>
    ))
}

export default memo(CartPage)