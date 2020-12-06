import styled from "styled-components";

export const StyledHeader = styled.div`
    top: 0;
    position: fixed;
    z-index: 5;
    padding: 23px 0;
    display: flex;
    background-color: #edebe8;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    table-layout: fixed;
    > div {
        display: flex;
        align-items: center;
    }
    p {
        margin: 0;
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
    ul {
        margin: 0;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
    }
    a {
        color: black;
    }
`;

export const ListItemWrapper = styled.li`
    padding-right: 25px;
    font-size: 20px;
    .selected {
        color: #cabcab;
    }
`;
