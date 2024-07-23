// import { getProducts } from "@/services/Products.services"
import axios from "axios"
import { BASE_URL } from "@/services/Serviceshttp"

const token = sessionStorage.getItem('token')

export const deleteProduct = async (id) => {
    try {
        const result = await axios.delete(`${BASE_URL}/product?id=${id}`, {
            headers: {
                Authorization: token
            }
        });
        return result;
    } catch (error) {
        throw new Error(error);
    }
}