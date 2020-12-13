import React from "react";
import { useHistory } from "react-router-dom";
import { Select } from "antd";
import {
    Layout,
    Section,
    StyledButton,
    StyledInputNumber,
    StyledSelect,
    LabeledInput,
    Inputs,
    Price,
    PriceAndButtons,
} from "./Item.styled";
import "antd/dist/antd.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHryvnia } from "@fortawesome/free-solid-svg-icons";

const Option = { Select };

export const Item = () => {
    const history = useHistory();
    const lamp = history.location.state;
    return (
        <Layout>
            <img src={lamp.imageSrc} alt={lamp.style + " lamp"} />
            <Section>
                <h1>{lamp.style + "Lamp" + lamp.id}</h1>
                <h3>Characteristics:</h3>
                <p>Style: {lamp.style}</p>
                <p>Brand: {lamp.brand}</p>
                <p>Room type: {lamp.room.toLowerCase()}</p>
                <p>Height: {lamp.heightInMm} mm</p>
                <p>Width: {lamp.widthInMm} mm</p>
                <p>Type: {lamp.type.toLowerCase()}</p>
                <Inputs>
                    <LabeledInput>
                        <h5>Count of bulbs</h5>
                        <StyledInputNumber min={0} max={5} />
                    </LabeledInput>
                    <LabeledInput>
                        <h5>Color</h5>
                        <StyledSelect placeholder="Color">
                            <Option value="black">Black</Option>
                            <Option value="white">White</Option>
                            <Option value="coral">Coral</Option>
                        </StyledSelect>
                    </LabeledInput>
                </Inputs>
                <PriceAndButtons>
                    <Price>
                        Price: {lamp.priceInUAH}
                        <FontAwesomeIcon
                            icon={faHryvnia}
                            style={{ marginLeft: 5 }}
                        />
                    </Price>

                    <StyledButton onClick={() => history.goBack()}>
                        Go Back
                    </StyledButton>
                    <StyledButton>Add to Cart</StyledButton>
                </PriceAndButtons>
            </Section>
        </Layout>
    );
};
