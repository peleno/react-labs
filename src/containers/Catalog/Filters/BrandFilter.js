import React from "react";
import { Filter } from "./Filter";

const brands = [
    { label: "Angelpoise", value: "angelpoise" },
    { label: "Artemide", value: "artemide" },
    { label: "Astro Lighting", value: "astrolighting" },
    { label: "Louis Poulsen", value: "louispoulsen" },
    { label: "Nordlux", value: "nordlux" },
];

export const BrandFilter = () => {
    return <Filter header="Brands" options={brands} />;
};
