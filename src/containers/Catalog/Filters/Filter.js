import React, { useState } from "react";
// import "antd/dist/antd.css";
import { StyledFilter, StyledCheckboxGroup } from "./Filter.styled";

export const Filter = ({ header, options, onChange }) => {
    return (
        <StyledFilter>
            <h5>{header}</h5>
            <StyledCheckboxGroup options={options} onChange={onChange} />
        </StyledFilter>
    );
};
