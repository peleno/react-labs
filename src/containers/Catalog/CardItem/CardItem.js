import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Button } from "antd";
import { StyledCard, Footer } from "./CardItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHryvnia } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const CardItem = (props) => {
    const { title = "No title.", text, imageSrc, price, lamp } = props;
    let history = useHistory();
    function handleClick() {
        history.push({
            pathname: "/item" + lamp.id,
            state: { ...lamp, imageSrc },
        });
    }
    return (
        <StyledCard hoverable cover={<img alt="example" src={imageSrc} />}>
            <Meta title={title} description={text} />
            <Footer>
                <p>
                    {price}
                    <FontAwesomeIcon
                        icon={faHryvnia}
                        style={{ marginLeft: 5 }}
                    />
                </p>
                <Button onClick={handleClick}>View more</Button>
            </Footer>
        </StyledCard>
    );
};
export default CardItem;
