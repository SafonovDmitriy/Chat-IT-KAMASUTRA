
import { loginAPI } from './../../api/api';
import dontAvatar from '../../assets/images/123.png'
import { updateProfileURL } from './SideBar-reducer';

let initialState = {

    activeIDUser: null,
    email: null,
    login: null,
    error: null,
    isAuth: false,
    avatar: '',
    preloader: false,
    firstResponse: false
}

const AuthReducer = (state = initialState, active) => {

    switch (active.type) {
        case "SET_DATE_USER":
            return { ...state, ...active.data, isAuth: active.auth }
        case "SET_PICTURE_USER":
            return { ...state, avatar: active.urlPicture }
        case "UPDETE_PRELOADER":
            return { ...state, preloader: active.count }
        case "ERROR":
            return { ...state, error: active.error }
        default: return { ...state }
    }
}

export const setDateUser = (data, auth) => ({ type: "SET_DATE_USER", data, auth })
export const setPictureUser = (urlPicture) => ({ type: "SET_PICTURE_USER", urlPicture })
export const preloaderForLogin = (count) => ({ type: "UPDETE_PRELOADER", count })
export const error = (error) => ({ type: "ERROR", error })

export const login = () => {
    return async (dispatch) => {
        dispatch(preloaderForLogin(true))
        dispatch(error(null))
        let response = await loginAPI.auth()
        if (response.resultCode === 0) {
            dispatch(setDateUser({ activeIDUser: response.data.id, email: response.data.email, login: response.data.login }, true))
            dispatch(updateProfileURL(response.data.id))
            let response2 = await loginAPI.getUserDate(response.data.id)
            dispatch(setPictureUser(!response2.photos.small ? dontAvatar : response2.photos.small))
            dispatch(preloaderForLogin(false)
            )
        } else {
            dispatch(preloaderForLogin(false))
        }
    }
}
export const log = (email, password, rememberMe = false) => {
    return async (dispatch) => {
        let response = await loginAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(error(null))
            dispatch(login())
        }
        else {
            dispatch(error(response.messages[0]))
        }
    }
}
export const logOut = () => {
    return async (dispatch) => {
        let response = await loginAPI.outlogin()
        let data = { activeIDUser: null, email: null, login: null }
        response.resultCode === 0 && dispatch(setDateUser(data, false))
    }
}
export default AuthReducer;