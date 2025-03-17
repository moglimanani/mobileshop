import { memo, useContext } from "react"
import ProductContext from "../contexts/productContext"
import { Card, Button } from "react-bootstrap"
import styles from '../styles/products.module.scss';
import { CartProps, ProductsProps } from "../types";
import FilterContext from "../contexts/filterContext";
import CartContext from "../contexts/cartContext";

const ProductsPage = () => {
  const { products } = useContext(ProductContext)
  const { filter } = useContext(FilterContext)
  const { cart, setCart } = useContext(CartContext)

  const filteredProducts = filter.brand.length > 0 ? products.filter(item => filter.brand.indexOf(item.Brand) >= 0) : products;
  const productList = filteredProducts.length > 0 && filteredProducts.map((item: ProductsProps, key) => {
    const addHandler = (id: number) => {
      const found = cart.length > 0 && !!cart.find(item => item.ID === id)
      if(!found){
        const updatedCart:CartProps[] = [...cart]
        const curProd = products.find(item=>item.ID===id)
        updatedCart.push({...curProd, quantity:1})
        
        setCart(updatedCart)
      } else {
        const updatedCart:CartProps[] = [...cart]
        
        const revisedCart = updatedCart.map((item: CartProps) => item.ID === id ? {...item, quantity: (item.quantity + 1)} : item)
       
        setCart(revisedCart)
      }
    }

    return (<Card key={`card-${key}`} className={styles.productsCard}>
      <Card.Img variant="top" className="img-fluid" src="https://placehold.co/300x200" />
      <Card.Body>
        <Card.Title>{item?.Name}</Card.Title>
        <Card.Text>
          {item.Description}
        </Card.Text>
        <Button variant="primary" onClick={()=>addHandler(item.ID)}>Buy $ {item.Price}</Button>
      </Card.Body>
    </Card>)
  })

  return (
    <>
      <h2>Products</h2>
      <div className={styles.productsWrapper}>
        {productList}
      </div>
    </>
  )
}

export default memo(ProductsPage)