import { memo, useContext } from "react"
import ProductContext from "../contexts/productContext"
import { Card, Button } from "react-bootstrap"
import styles from '../styles/products.module.scss';
import { ProductsProps } from "../types";
import FilterContext from "../contexts/filterContext";

const ProductsPage = () => {
  const { products } = useContext(ProductContext)
  const { filter } = useContext(FilterContext)
  const filteredProducts = filter.brand.length > 0 ? products.filter(item => filter.brand.indexOf(item.Brand) >= 0) : products;
  const productList = filteredProducts.length > 0 && filteredProducts.map((item: ProductsProps, key) => {
    // console.log('item', item);

    return (<Card key={`card-${key}`} className={styles.productsCard}>
      <Card.Img variant="top" className="img-fluid" src="https://placehold.co/300x200" />
      <Card.Body>
        <Card.Title>{item?.Name}</Card.Title>
        <Card.Text>
          {item.Description}
        </Card.Text>
        <Button variant="primary">Buy $ {item.Price}</Button>
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