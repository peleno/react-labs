import styled from "styled-components";
import { Layout, Input } from "antd";

export const Container = styled.div`
    max-width: 1250px;
    margin: 0 auto;
`;

export const StyledLayout = styled(Layout)`
    max-width: 1250px;
    margin: 0 auto;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    /* background-color: "white"; */
`;

export const StyledTopPanel = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledSearch = styled(Input.Search)`
    margin-left: 30px;
    margin-right: 50px;
    width: 200px;
`;
