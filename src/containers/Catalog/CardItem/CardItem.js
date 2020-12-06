import React from "react";
import "antd/dist/antd.css";
import { Card, Button } from "antd";
import { StyledCard, Footer } from "./CardItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHryvnia } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

const CardItem = ({ title = "No title.", text, imageSrc, price }) => (
    <StyledCard hoverable cover={<img alt="example" src={imageSrc} />}>
        <Meta title={title} description={text} />
        <Footer>
            <p>
                {price}
                <FontAwesomeIcon icon={faHryvnia} style={{ marginLeft: 5 }} />
            </p>
            <Button>View more</Button>
        </Footer>
    </StyledCard>
);
export default CardItem;
