import auth from './auth.routes.js'
import product from "./crud.routes.js";
import dynamic from './dinamyList.routes.js'

const indexRouter = [
    ('/auth', auth),
    ('/product', product),
    ('/dynamic', dynamic)
];

export default indexRouter