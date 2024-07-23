import axios from "axios";
import { BASE_URL } from "./Serviceshttp";

export const getUser = async() => {
    try {
      const result = await axios.get(`${BASE_URL}/auth`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
}

export const loginUser = async (loginUser, loginPassword) =>{
  try {
    const result = await axios.post(`${BASE_URL}/auth`, {
      user: loginUser,
      password: loginPassword
    })
    return result.data.token;
  } catch (error) {
    throw new Error('Error al iniciar sesion');
  }
}