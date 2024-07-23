import axios from "axios";
import { BASE_URL } from "./Serviceshttp";
import { getConfigHttpReq} from "@/Variabe/APILogic";

var config = getConfigHttpReq() 

const getCategoria = async () => {
    try {
        const result = await axios.get(`${BASE_URL}/product/categoria`, config);
        return result.data.filter
    } catch (error) {
        console.log(error);
    }
}

export default getCategoria;