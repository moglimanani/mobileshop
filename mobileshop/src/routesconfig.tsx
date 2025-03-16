import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";

 
const routeConfig = [
    {path: '/', element: <HomePage />},
    {path: '/about', element: <AboutUsPage />},
    {path: '/contact', element: <ContactPage />},
    {path: '/cart', element: <CartPage />},
    {path: '/products', element: <ProductsPage />},
    {path: '/category', element: <CategoryPage />},
]

export default routeConfig