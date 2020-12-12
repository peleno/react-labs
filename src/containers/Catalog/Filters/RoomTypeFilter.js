import React from "react";
import { Filter } from "./Filter";

const roomTypes = [
    { label: "Bedroom", value: "bedroom" },
    { label: "Bathroom", value: "bathroom" },
    { label: "Kitchen", value: "kitchen" },
    { label: "Living room", value: "livingroom" },
    { label: "Corridor", value: "corridor" },
    { label: "Children room", value: "childrenroom" },
    { label: "Office", value: "office" },
];

export const RoomTypeFilter = ({ onChange }) => {
    return (
        <Filter header="Room Type" options={roomTypes} onChange={onChange} />
    );
};
