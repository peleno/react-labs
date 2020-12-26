import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    incrementLampCount,
    decrementLampCount,
    selectLampsInCart,
} from "../../../redux/slice";
import {
    StyledShoppingCartItem,
    ItemsQuantity,
    Price,
} from "./ShoppingCartItem.styled";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHryvnia } from "@fortawesome/free-solid-svg-icons";

export const ShoppingCartItem = ({ lamp }) => {
    const count = useSelector(selectLampsInCart);
    const dispatch = useDispatch();

    return (
        <StyledShoppingCartItem>
            <img src={lamp.imageSrc} alt="lamp" />
            <h3>{lamp.style + "Lamp" + lamp.id}</h3>
            <ItemsQuantity>
                <MinusCircleOutlined
                    onClick={() => dispatch(decrementLampCount(lamp.id))}
                    style={{ cursor: "pointer" }}
                />
                {lamp.count}
                <PlusCircleOutlined
                    onClick={() => dispatch(incrementLampCount(lamp.id))}
                    style={{ cursor: "pointer" }}
                />
            </ItemsQuantity>
            <Price>
                {lamp.priceInUAH}
                <FontAwesomeIcon icon={faHryvnia} style={{ marginLeft: 5 }} />
            </Price>
        </StyledShoppingCartItem>
    );
};
