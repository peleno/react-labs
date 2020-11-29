import { Button } from "antd";
import styled from "styled-components";

export const StyledSection = styled.div`
    /* background-image: url("/lumens-main.jpg"); */
    margin-top: 120px;
    /* height: 500px; */
    display: flex;
    > img {
        width: 1250px;
        /* margin-left: 100px; */
    }
`;

export const StyledText = styled.div`
    color: #fff;
    position: absolute;
    padding-top: 90px;
    padding-left: 100px;
    max-width: 800px;
    font-family: "proxima-nova", sans-serif;
    font-size: 21px;
    > h2 {
        color: #fff;
        font-style: italic;
        font-weight: bold;
        text-transform: none;
        font-size: 2.28em;
        font-family: "Times New Roman", Baskerville, "Palatino Linotype",
            Palatino, "Century Schoolbook L", serif;
    }
`;

export const ItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledButton = styled(Button)`
    width: 350px;
    height: 40px;
`;
