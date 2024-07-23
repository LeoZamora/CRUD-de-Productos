import store from "@/store";

export function getConfigHttpReq() {
    let token = store.getters.isLoggedIn ? localStorage.getItem('token') : null;
    let headers = {};
    if(token){
        headers.Authorization = token
    }

    return { headers}
}

export function deleteConfigAuth(){
    localStorage.removeItem('token');
    return;
}

export function getConfigCookie() {
    let headers = {};
    let cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cook => cook.trim().startsWith('token='));
    if(tokenCookie){
        const token = tokenCookie.split('=')[1];
        headers.Authorization = token
    }
    return headers;
}

export default {deleteConfigAuth, getConfigHttpReq}
