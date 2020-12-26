import React from "react";
import { StyledHeader, ListItemWrapper } from "./Header.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    BulbOutlined,
} from "@ant-design/icons";
import IconsWrapper from "../../components/IconsWrapper";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";
import Home from "../Home/Home";
import { Catalog } from "../Catalog/Catalog";
import { Item } from "../Item/Item";
import { Cart } from "../Cart/Cart";

function Header() {
    return (
        <Router>
            <StyledHeader title="Lamp Shop">
                <div>
                    <BulbOutlined />
                    <p>Lamp Shop</p>
                </div>
                <div>
                    <ul>
                        <ListItemWrapper>
                            <NavLink exact to="/" activeClassName="selected">
                                Home
                            </NavLink>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <NavLink
                                exact
                                to="/catalog"
                                activeClassName="selected"
                            >
                                Catalog
                            </NavLink>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <NavLink
                                exact
                                to="/cart"
                                activeClassName="selected"
                            >
                                Cart
                            </NavLink>
                        </ListItemWrapper>
                    </ul>
                </div>
                <IconsWrapper>
                    <TwitterOutlined />
                    <FacebookOutlined />
                    <InstagramOutlined />
                </IconsWrapper>
            </StyledHeader>
            <div style={{ height: 100 }}></div>
            <Switch>
                <Route path="/item:itemId">
                    <Item />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/catalog">
                    <Catalog />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default Header;
