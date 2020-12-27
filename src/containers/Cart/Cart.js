import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectLampsInCart } from "../../redux/slice";
import {
    CartContainer,
    Buttons,
    TotalPrice,
    StyledButton,
} from "./Cart.styled";
import { ShoppingCartItem } from "./ShoppingCartItem/ShoppingCartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHryvnia } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
    const lamps = useSelector(selectLampsInCart);
    const history = useHistory();
    return (
        <CartContainer>
            {Object.values(lamps).map((lamp) => (
                <ShoppingCartItem lamp={lamp} key={lamp.id} />
            ))}
            <TotalPrice>
                Total price:{" "}
                {Object.values(lamps).reduce((accumulator, currentValue) => {
                    return (
                        accumulator +
                        currentValue.priceInUAH * currentValue.count
                    );
                }, 0)}
                <FontAwesomeIcon icon={faHryvnia} style={{ marginLeft: 5 }} />
            </TotalPrice>
            <Buttons>
                <StyledButton onClick={() => history.goBack()}>
                    Go Back
                </StyledButton>
                <StyledButton
                    type="primary"
                    onClick={() => history.push("/checkout")}
                >
                    Continue
                </StyledButton>
            </Buttons>
        </CartContainer>
    );
};
