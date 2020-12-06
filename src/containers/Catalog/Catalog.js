import React from "react";

import "antd/dist/antd.css";
import { Layout } from "antd";

import {
    StyledLayout,
    ItemsContainer,
    StyledSearch,
    StyledTopPanel,
} from "./Catalog.styled";

import CardItem from "./CardItem/CardItem";

import { RoomTypeFilter } from "./Filters/RoomTypeFilter";
import { TableLampTypeFilter } from "./Filters/TableLampTypeFilter";
import { BrandFilter } from "./Filters/BrandFilter";
import { StyleFilter } from "./Filters/StyleFilter";
import { PriceSlider } from "./Filters/PriceSlider/PriceSlider";
import { SortSelect } from "./SortSelect/SortSelect";
import Lamp1 from "../../images/catalog/lamp1.jpeg";
import Lamp2 from "../../images/catalog/lamp2.jpeg";
import Lamp3 from "../../images/catalog/lamp3.jpeg";
import Lamp4 from "../../images/catalog/lamp4.jpeg";
import Lamp5 from "../../images/catalog/lamp5.jpeg";
import Lamp6 from "../../images/catalog/lamp6.jpeg";
import Lamp7 from "../../images/catalog/lamp7.jpeg";

const { Sider, Content } = Layout;

const lamps = [
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp1,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp2,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp3,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp4,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp5,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp6,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp7,
        price: 715,
    },
    {
        title: "Mid-Century must haves",
        text: "This signature style never goes out of fashion.",
        image: Lamp1,
        price: 715,
    },
];

export const Catalog = () => {
    return (
        <StyledLayout>
            <Sider theme="light">
                <RoomTypeFilter />
                <TableLampTypeFilter />
                <BrandFilter />
                <StyleFilter />
                <PriceSlider />
            </Sider>
            <Layout className="site-layout">
                <Content style={{ backgroundColor: "white" }}>
                    <StyledTopPanel>
                        <SortSelect />
                        <StyledSearch
                            placeholder="I'm searching..."
                            allowClear
                        />
                    </StyledTopPanel>
                    <ItemsContainer>
                        {lamps.map(({ title, text, image, price }, idx) => (
                            <CardItem
                                title={title}
                                text={text}
                                imageSrc={image}
                                price={price}
                                id={idx}
                            />
                        ))}
                    </ItemsContainer>
                </Content>
            </Layout>
        </StyledLayout>
    );
};
