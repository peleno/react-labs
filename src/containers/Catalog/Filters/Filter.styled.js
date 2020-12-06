import styled from "styled-components";
import { Checkbox } from "antd";

export const StyledFilter = styled.div`
    > h5 {
        font-size: 15px;
        font-weight: 600;
    }
`;

export const StyledCheckboxGroup = styled(Checkbox.Group)`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;
