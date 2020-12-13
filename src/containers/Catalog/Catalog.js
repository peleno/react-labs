// import { lamps } from "../FakeData";
import React, { useState, useEffect } from "react";

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
import { getAllLamps } from "../../api/Api";
import { Loader } from "./Loader/Loader";
const lampImages = [Lamp1, Lamp2, Lamp3, Lamp4, Lamp5, Lamp6, Lamp7];
const { Sider, Content } = Layout;

export const Catalog = () => {
    const [lamps, setLamps] = useState([]);
    const [filteredLamps, setFilteredLamps] = useState(lamps);
    const [filters, setFilters] = useState({
        brand: [],
        roomType: [],
        tableLampType: [],
        style: [],
        minPrice: 0,
        maxPrice: 10000,
    });
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        getAllLamps().then((res) => setLamps(res));
    }, []);

    const getBrandFilterValues = (checkedValues) => {
        setFilters({ ...filters, brand: checkedValues });
    };

    const getRoomTypeFilterValues = (checkedValues) => {
        setFilters({ ...filters, roomType: checkedValues });
    };

    const getTableLampTypeFilterValues = (checkedValues) => {
        setFilters({ ...filters, tableLampType: checkedValues });
    };

    const getStyleFilterValues = (checkedValues) => {
        setFilters({ ...filters, style: checkedValues });
    };

    const getPriceSliderValues = (value) => {
        setFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
    };

    const getSearchValue = (value, event) => {
        setSearchValue(value);
    };

    useEffect(() => {
        const brandFilter = (lamp) => {
            return (
                filters.brand.includes(
                    lamp.brand.toLowerCase().replace(/\s/g, "")
                ) || filters.brand.length === 0
            );
        };

        const roomTypeFilter = (lamp) => {
            return (
                filters.roomType.includes(lamp.room.toLowerCase()) ||
                filters.roomType.length === 0
            );
        };

        const tableLampTypeFilter = (lamp) => {
            return (
                filters.tableLampType.includes(lamp.type.toLowerCase()) ||
                filters.tableLampType.length === 0
            );
        };

        const styleFilter = (lamp) => {
            return (
                filters.style.includes(
                    lamp.style.toLowerCase().replace(/\s/g, "")
                ) || filters.style.length === 0
            );
        };

        const priceFilter = (lamp) => {
            return (
                filters.minPrice <= lamp.priceInUAH &&
                filters.maxPrice >= lamp.priceInUAH
            );
        };

        const searchByTextField = (lamp) => {
            return (
                lamp.brand.toLowerCase().search(searchValue.toLowerCase()) !==
                    -1 ||
                lamp.style.toLowerCase().search(searchValue.toLowerCase()) !==
                    -1
            );
        };

        const applyAllFilters = (lamps) => {
            return lamps.filter((lamp) => {
                return (
                    brandFilter(lamp) &&
                    roomTypeFilter(lamp) &&
                    tableLampTypeFilter(lamp) &&
                    styleFilter(lamp) &&
                    priceFilter(lamp) &&
                    searchByTextField(lamp)
                );
            });
        };
        setFilteredLamps(applyAllFilters(lamps));
    }, [filters, searchValue, lamps]);

    return (
        <StyledLayout>
            <Sider theme="light">
                <RoomTypeFilter onChange={getRoomTypeFilterValues} />
                <TableLampTypeFilter onChange={getTableLampTypeFilterValues} />
                <BrandFilter onChange={getBrandFilterValues} />
                <StyleFilter onChange={getStyleFilterValues} />
                <PriceSlider onChange={getPriceSliderValues} />
            </Sider>
            <Layout className="site-layout">
                <Content style={{ backgroundColor: "white" }}>
                    <StyledTopPanel>
                        <SortSelect />
                        <StyledSearch
                            placeholder="I'm searching..."
                            allowClear
                            onSearch={getSearchValue}
                        />
                    </StyledTopPanel>
                    <ItemsContainer>
                        {lamps.length === 0 ? (
                            <Loader></Loader>
                        ) : (
                            filteredLamps.map((lamp) => (
                                <CardItem
                                    title={lamp.style + "Lamp" + lamp.id}
                                    text={"By " + lamp.brand}
                                    imageSrc={lampImages[lamp.id % 7]}
                                    price={lamp.priceInUAH}
                                    lamp={lamp}
                                />
                            ))
                        )}
                    </ItemsContainer>
                </Content>
            </Layout>
        </StyledLayout>
    );
};
