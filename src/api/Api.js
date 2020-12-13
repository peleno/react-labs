import axios from "axios";

const BaseRequest = axios.create({
    baseURL: "http://localhost:8080/lamps/",
    responseType: "json",
});

export const getAllLamps = async () => {
    const lamps = await (await BaseRequest.get("/")).data;
    return lamps;
};
