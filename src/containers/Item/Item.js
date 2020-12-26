import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLampToCart } from "../../redux/slice";
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

export const Item = () => {
    const dispatch = useDispatch();
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
                            <Select.Option value="black">Black</Select.Option>
                            <Select.Option value="white">White</Select.Option>
                            <Select.Option value="coral">Coral</Select.Option>
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
                    <StyledButton
                        onClick={() => {
                            dispatch(addLampToCart({ ...lamp, count: 1 }));
                        }}
                    >
                        Add to Cart
                    </StyledButton>
                </PriceAndButtons>
            </Section>
        </Layout>
    );
};
