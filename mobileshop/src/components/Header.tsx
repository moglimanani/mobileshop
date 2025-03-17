import { memo, useState } from "react";
import { Nav } from "react-bootstrap";
import routeConfig from "../routesconfig";

const Header = () => {
    const [activeNav, setActiveNav] = useState<string>('/')
    const items = routeConfig.map((navItem, id) => {
        console.log(navItem.path, activeNav);

        return (
            <Nav.Item key={`nav-${id}`}>
                <Nav.Link eventKey={navItem.path} className={navItem.path === activeNav ? 'active' : ''} href={`${navItem.path}`}>{navItem.name}
                </Nav.Link>
            </Nav.Item>)
    })
    const selectHandler = (selectedKey: any) => {
        console.log('selectedKey', selectedKey);

        setActiveNav(selectedKey)
    }
    return (

        <Nav justify variant="tabs" activeKey={activeNav} onSelect={selectHandler}>
            {items}
        </Nav>
    );
}

export default memo(Header);