import User from '../models/user.model.js'

export const login = async (userFind, passwordFind) =>  {
    try {
        const user = await User.findOne({where: {user: userFind, password: passwordFind}});
        return user;
    } catch (error) {
        console.log(error);
    }
}