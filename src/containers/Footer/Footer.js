import React from "react";
import { Wrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import IconsWrapper from "../../components/IconsWrapper";
const Footer = () => {
    return (
        <Wrapper>
            <StyledText>© 2020 Lamp Shop. All Rights Reserved.</StyledText>

            <IconsWrapper>
                <IconBase component={TwitterOutlined} />
                <IconBase component={FacebookOutlined} />
                <IconBase component={InstagramOutlined} />
            </IconsWrapper>
        </Wrapper>
    );
};

export default Footer;
