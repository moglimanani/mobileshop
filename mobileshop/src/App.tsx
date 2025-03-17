import { SetStateAction, useEffect, useState } from 'react';
import ThemeContext from './contexts/themeContext';
// import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './Routes';
import ProductContext from './contexts/productContext';
import { CartProps, FilterProps, ProductsProps } from './types';
import data from './data/products.metadata.ts';
import CategoryPage from './pages/CategoryPage.tsx';
import styles from './styles/app.module.scss';
import FilterContext from './contexts/filterContext.ts';
import CartContext from './contexts/cartContext.ts';

function App() {
  const [theme, setTheme] = useState<string>('light')
  const [products, setProducts] = useState<ProductsProps[]>([{ ID: 1 }])
  const [filter, setFilter] = useState<FilterProps>({ brand: [] })
  const [cart, setCart] = useState<CartProps[]>([])
  useEffect(() => {
    setProducts(data);
  }, [])
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <ProductContext.Provider value={{ products, setProducts }}>
            <CartContext.Provider value={{ cart, setCart }}>
              <BrowserRouter>
                <div className={styles.container}>
                  <header>
                    <Header />
                  </header>
                  <section>
                    <nav>
                      <h3> Brands </h3>
                      <CategoryPage />
                    </nav>
                    <article>
                      <RoutesComponent />
                    </article>
                  </section>
                </div>
              </BrowserRouter>
            </CartContext.Provider>
          </ProductContext.Provider>
        </FilterContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
