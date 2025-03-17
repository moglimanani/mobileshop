import { memo, useContext, useState } from "react";
import { Nav, Badge } from "react-bootstrap";
import routeConfig from "../routesconfig";
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";

const Header = () => {
    const [activeNav, setActiveNav] = useState<string>('/')
    const { cart } = useContext(CartContext)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

    const BadgeComp = ({total}: any) => {        
        return (<><Badge bg="secondary">{total}</Badge></>)
    }

    const items = routeConfig.map((navItem, id) => {

        return (
            <Nav.Item key={`nav-${id}`}>
                <Nav.Link as={Link} eventKey={navItem.path} className={navItem.path === activeNav ? 'active' : ''} to={`${navItem.path}`}>
                    <>
                    {navItem.name === 'Cart' && <><span>{navItem.name}</span> <BadgeComp total={totalItems} /></> }
                    {navItem.name !== 'Cart' && <span>{navItem.name}</span> }
                    </>
                </Nav.Link>
            </Nav.Item>)
    })
    const selectHandler = (selectedKey: any) => {

        setActiveNav(selectedKey)
    }
    return (

        <Nav justify variant="tabs" activeKey={activeNav} onSelect={selectHandler}>
            {items}
        </Nav>
    );
}

export default memo(Header);