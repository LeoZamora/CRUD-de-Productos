import axios from "axios";
import { BASE_URL } from "./Serviceshttp.js";
import { getConfigHttpReq } from "@/Variabe/APILogic.js";

const config = getConfigHttpReq();

export const getList = async () => {
    try {
        const result = await axios.get(`${BASE_URL}/dynamic`, config);
        return result.data
    } catch (error) {
        console.log({error: 'Error al obener los datos'});
    }
}