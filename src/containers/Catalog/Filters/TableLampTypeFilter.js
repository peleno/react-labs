import React from "react";
import { Filter } from "./Filter";

const types = [
    { label: "Bedside", value: "bedside" },
    { label: "Task", value: "task" },
];
export const TableLampTypeFilter = () => {
    return <Filter header="Type" options={types} />;
};
