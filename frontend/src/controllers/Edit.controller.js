import axios from "axios"
import { BASE_URL } from "@/services/Serviceshttp.js"

var token = localStorage.getItem('token');

export const editProduct = async (product) => {

    let Id = product.Id;

    let Data = {
        Nombre: product.Name,
        Categoria: product.Category,
        Precio: product.Price,
        Descripcion: product.Description
    }

    return new Promise((resolve, reject) => {

        if (!token) {
            reject({
                data: {
                    code: 401,
                    msg: 'Token no encontrado'
                }
            });
            return;
        }

        axios.put(`${BASE_URL}/product?id=${Id}`, Data, {
            headers: {
                Authorization: `${token}`
            }
        }).then(function(response){
            resolve(response)
        }).catch(err => {
            reject(err.response ? err.response : {
                data: {
                    code: 404,
                    msg: 'Error de conexion'
                }
            })
        })
    })
}
