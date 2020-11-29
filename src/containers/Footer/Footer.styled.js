import styled from "styled-components";
import Icon from "@ant-design/icons";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    padding: 110px 0;
    margin-top: 30px;
`;

export const StyledText = styled.p`
    margin: 5px 0;
    font-size: 14px;
    color: #828282;
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: #cabcab;
`;
