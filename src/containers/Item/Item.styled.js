import styled from "styled-components";
import { Button, InputNumber, Select } from "antd";

export const Layout = styled.div`
    display: flex;
    max-width: 1250px;
    margin: 0 auto;
    > img {
        margin-left: 100px;
        width: 400px;
    }
`;

export const Section = styled.div`
    margin-left: 100px;
    > h1 {
        font-size: 30px;
        font-weight: bold;
    }
    > h3 {
        font-size: 25px;
    }

    > p {
        font-size: 18px;
        margin: 5px 40px;
    }
`;

export const StyledButton = styled(Button)`
    height: 40px;
    width: 110px;
    font-size: 16px;
    margin-left: 20px;
`;

export const StyledInputNumber = styled(InputNumber)`
    height: 32px;
    width: 100px;
    margin-top: 0;
`;

export const StyledSelect = styled(Select)`
    box-sizing: border-box;
    height: 32px;
    width: 100px;
    margin-top: 0;
`;

export const LabeledInput = styled.span`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    h5 > {
        font-size: 14px;
        margin-bottom: 0px;
    }
`;

export const Inputs = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const Price = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-right: 50px;
`;

export const PriceAndButtons = styled.div`
    margin-top: 60px;
    margin-right: 150px;
`;
