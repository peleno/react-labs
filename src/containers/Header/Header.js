import React from "react";
import { StyledHeader, ListItemWrapper } from "./Header.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    BulbOutlined,
} from "@ant-design/icons";
import IconsWrapper from "../../components/IconsWrapper";

function Header() {
    return (
        <StyledHeader title="Lamp Shop">
            <div>
                <BulbOutlined />
                <p>Lamp Shop</p>
            </div>
            <div>
                <ul>
                    <ListItemWrapper>Home</ListItemWrapper>
                    <ListItemWrapper>Catalog</ListItemWrapper>
                    <ListItemWrapper>Cart</ListItemWrapper>
                </ul>
            </div>
            <IconsWrapper>
                <TwitterOutlined />
                <FacebookOutlined />
                <InstagramOutlined />
            </IconsWrapper>
        </StyledHeader>
    );
}

export default Header;
