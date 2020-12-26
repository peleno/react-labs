import styled from "styled-components";
import { Button } from "antd";

export const CartContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TotalPrice = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 50px 0;
    width: 1000px;
    font-size: 21px;
`;

export const Buttons = styled.div`
    display: flex;
    width: 1000px;
    justify-content: space-between;
`;

export const StyledButton = styled(Button)`
    height: 40px;
    width: 110px;
    font-size: 16px;
`;
