import axios from "axios";
import { BASE_URL } from "@/services/Serviceshttp.js";
import { getConfigHttpReq } from "@/Variabe/APILogic";

var config = getConfigHttpReq()

export const saveProduct = async (product) => {
  let data = {
    Nombre: product.Nombre,
    Precio: product.Precio,
    Descripcion: product.Descripcion,
    fk_id_Cat: product.Categoria,
    Codigo: product.Codigo,
    fk_id_Empaque: product.TipoEmpaque,
  }

  return new Promise((resolve, reject) => {
    if (!config) {
        reject({
            data: {
                code: 401,
                msg: 'Token no encontrado'
            }
        });
        return;
    }

    axios.post(`${BASE_URL}/product`, data, config).then(function(response) {
        resolve(response);
    }).catch(err => {
        reject(err.response ? err.response: {
            data: {
                Code: 404,
                msg: 'Error de conexion'
            }
        })
    })
  })
}