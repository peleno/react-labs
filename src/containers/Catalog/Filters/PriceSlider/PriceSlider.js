import React from "react";
import { Slider } from "antd";
import { StyledPriceSlider } from "./PriceSlider.styled";

export const PriceSlider = ({ onChange }) => {
    return (
        <StyledPriceSlider>
            <h5>Price</h5>
            <Slider
                range
                max={10000}
                defaultValue={[0, 10000]}
                onChange={onChange}
            />
        </StyledPriceSlider>
    );
};
