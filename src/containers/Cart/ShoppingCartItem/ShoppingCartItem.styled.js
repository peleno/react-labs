import styled from "styled-components";

export const StyledShoppingCartItem = styled.div`
    width: 1000px;
    height: 100px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px black;
    > img {
        width: 100px;
        height: 100px;
    }
    > h3 {
        margin: 0;
        font-size: 25px;
        font-weight: bold;
    }
`;

export const ItemsQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    width: 100px;
`;

export const Price = styled.div`
    font-size: 20px;
    margin-right: 35px;
`;
