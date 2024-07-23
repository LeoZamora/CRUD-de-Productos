// import { getConnection } from "../db/connection.js"
import { login } from "../repositories/auth.repository.js"
import { generateJWT } from "../helpers/jws.js"
import User  from "../models/user.model.js";

export const get = async (req, res) => {
    const usuario = await User.findAll()
    res.json(usuario)
}

export const postUser = async (req, res) => {
    const {user, password} = req.body;

    try {
        const newUser = await User.create({
            user,
            password
        });
        res.json(newUser)
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const auth = async (req, res) => {
    const {user, password} = req.body

    try {
        const result = await login(user, password);

        console.log(result);
        if (result.length == 0) return res.status(400).json({ message: 'Invalid User' })

        const token =  await generateJWT(result.Id, user)

        console.log(token)

        return res.json({
            ok: true,
            uid: result.Id,
            email: result.user,
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}