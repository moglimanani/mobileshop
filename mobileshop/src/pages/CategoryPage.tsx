import { Fragment, memo, useContext } from "react"
import ProductContext from "../contexts/productContext"
import { Button } from "react-bootstrap"
import styles from '../styles/category.module.scss'
import FilterContext from "../contexts/filterContext"
const CategoryPage = () => {
    const { products } = useContext(ProductContext)
    const { filter, setFilter } = useContext(FilterContext)

    const uniqueProducts = [...new Map(products.map(item => [item['Brand'], item])).values()]
    const clickHandler = (e: any) => {
        const brand = e.target.dataset.brand
        let updatedFilter
        if (filter.brand.indexOf(brand) < 0) {
            updatedFilter = { brand: [...filter.brand, brand] }
        } else {
            updatedFilter = { ...filter }
            updatedFilter.brand.splice(filter.brand.indexOf(brand), 1)
        }
        setFilter(updatedFilter)
    }

    return (
        <div className={styles.categoryWrapper}>
            {uniqueProducts.map(prod => (
                <Fragment key={`category-${prod.ID}`}>
                    <Button className={filter.brand.indexOf(prod.Brand) >=0 ? styles.filteredButton: ''} variant="link" onClick={clickHandler} data-brand={prod.Brand}>{prod.Brand}</Button>
                </Fragment>
            ))}
        </div>

    )
}

export default memo(CategoryPage)