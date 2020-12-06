import React from "react";
// import "antd/dist/antd.css";
import { StyledFilter, StyledCheckboxGroup } from "./Filter.styled";

export const Filter = ({ header, options }) => {
    return (
        <StyledFilter>
            <h5>{header}</h5>
            <StyledCheckboxGroup options={options} />
        </StyledFilter>
    );
};
