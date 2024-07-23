import axios from "axios";
import { BASE_URL } from "./Serviceshttp";
import { getConfigHttpReq } from "@/Variabe/APILogic";

var config = getConfigHttpReq()


export const getProducts = async (page) => {

    config.params = {
      limit: 6,
      page: page
    }

    try {
      const result = await axios.get(`${BASE_URL}/product`, config)
      return result
    } catch (error) {
        console.log(error);
    }
}

export const getFilterProducts = async (name) => {

  try {
    const result = await axios.get(`${BASE_URL}/product?nombre=${name}`, config)

    return result
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteProducts = async (id) => {

  config.params = {
    Id: id
  }

  try {
    const result = await axios.delete(`${BASE_URL}/product`, config)
    return result
  } catch (error) {
    console.log(error);
  }
}


