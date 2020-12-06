import React from "react";
import { Filter } from "./Filter";

const styles = [
    { label: "Modern", value: "modern" },
    { label: "Classic", value: "classic" },
    { label: "Luxury", value: "luxury" },
    { label: "Design", value: "design" },
];

export const StyleFilter = () => {
    return <Filter header="Style" options={styles} />;
};
