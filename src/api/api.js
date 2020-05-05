
import * as Axios from 'axios';
const instance = Axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "bf567f2e-3bfc-4508-84fd-b3ff5b94bee4"
    }

})
export const loginAPI = {
    auth() {
        return instance.get('auth/me').then(response => {
            return response.data
        }
        )
    },

    getUserDate(idUser) {
        return instance.get(`profile/${idUser}`).then(response => {
            return response.data
        })
    }
}


export const UsersAPI = {
    getUsers(pageCount = 1, pageSize = 10) {
        return instance.get(`users?page=${pageCount}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}


export const subscribeAPI = {
    postFollow(idUser) {
        return instance.post(`follow/${idUser}`).then(response => {
            return response.data
        })
    },
    deleteFollow(idUser) {
        return instance.delete(`follow/${idUser}`).then(response => {
            return response.data
        })
    }
}

