import React from "react";
import CardItem from "../../components/CardItem";

export const CardItems = ({ items }) => {
    return items.map(({ title, text, image, price }, idx) => (
        <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
        />
    ));
};
