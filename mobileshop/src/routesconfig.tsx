import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";

 
const routeConfig = [
    {path: '/', element: <HomePage />, name: 'Home'},
    {path: '/about', element: <AboutUsPage />, name: 'About Us'},
    {path: '/contact', element: <ContactPage />, name: 'Contact'},
    {path: '/products', element: <ProductsPage />, name: 'Products'},
    // {path: '/products/:brand', element: <ProductsPage />, name: 'Category'},
    {path: '/cart', element: <CartPage />, name: 'Cart'}
]

export default routeConfig