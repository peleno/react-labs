import React from "react";
import "antd/dist/antd.css";

import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title = "No title.", text, imageSrc, price }) => (
    <Card
        hoverable
        style={{ width: 350, marginBottom: "20px" }}
        cover={<img style={{ height: "300px" }} alt="example" src={imageSrc} />}
    >
        <Meta title={title} description={text} />
        <Footer>
            <p>${price}</p>
            <Button>Shop Now</Button>
        </Footer>
    </Card>
);

export default CardItem;
