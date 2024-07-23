import { dynamicList } from "../models/dynamicList.model.js";

export const getList = async (req, res) => {
    try {
        const result = await dynamicList.findAll();
        res.json(result);

    } catch (error) {
        res.status(500).json({error: 'Error interno del servidor'});
    }
}