import React from "react";

import "antd/dist/antd.css";
import { StyledSelect } from "./SortSelect.styled";
import { Select } from "antd";
const { Option } = Select;

export const SortSelect = () => {
    return (
        <StyledSelect placeholder="Sort by">
            <Option value="none">None</Option>
            <Option value="priceAsc">Lowest price first</Option>
            <Option value="priceDesc">Highest price first</Option>
        </StyledSelect>
    );
};
