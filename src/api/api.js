
import * as Axios from 'axios';
const instance = Axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b5bbbd94-b945-4b50-9103-6ddd22270e5a"
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
export const UserStatusAPI = {
    getStatus(idUser) {
        return instance.get(`profile/status/${idUser}`).then(response => {
            
            return response
        })
    },
    setStatus(status) {

        return instance.put(`profile/status/`, { status }).then(response => {
            return response
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

