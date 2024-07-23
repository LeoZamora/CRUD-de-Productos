import { createStore} from "vuex";

export default createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: {
        setLoginState(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
            if (isLoggedIn) {
                localStorage.setItem('token', localStorage.getItem('token')); // Guardar token en localStorage
            } else {
                localStorage.removeItem('token'); // Eliminar token de localStorage
            }
        }
    },
    actions: {
        login({commit}) {
            commit('setLoginState', true)
        },
        logout({commit}) {
            localStorage.removeItem('token');
            commit('setLoginState', false)
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
})