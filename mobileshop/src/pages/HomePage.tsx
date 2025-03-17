import { memo, useContext } from "react"
import ThemeContext from "../contexts/themeContext"
import { useLocation } from "react-router-dom"
import ProductContext from "../contexts/productContext"

const HomePage = () => {
  const {theme} = useContext(ThemeContext)
  const {products} = useContext(ProductContext)
  const {pathname} = useLocation()
  console.log(products);
  
    return (
        <h1>
          Welcome to the mobile shop
        </h1>
    )
}

export default memo(HomePage)