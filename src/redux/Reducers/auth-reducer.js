
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
        case "FIRST_REQUTST":

            return { ...state, firstResponse: true }
        default: return { ...state }
    }
}



export const setDateUser = (data, auth) => ({ type: "SET_DATE_USER", data, auth })
export const setPictureUser = (urlPicture) => ({ type: "SET_PICTURE_USER", urlPicture })
export const preloaderForLogin = (count) => ({ type: "UPDETE_PRELOADER", count })
export const error = (error) => ({ type: "ERROR", error })
export const firstRequest = () => ({ type: "FIRST_REQUTST" })

export const login = () => {

    return (dispatch) => {

        dispatch(preloaderForLogin(true))
        dispatch(error(null))
        loginAPI.auth().then(response => {

            if (response.resultCode === 0) {

                let data = { activeIDUser: response.data.id, email: response.data.email, login: response.data.login }
                dispatch(setDateUser(data, true))
                dispatch(updateProfileURL(response.data.id))
                loginAPI.getUserDate(response.data.id).then(response2 => {

                    dispatch(setPictureUser(response2.photos.small === null ? dontAvatar : response2.photos.small))
                    dispatch(preloaderForLogin(false)
                    )
                })

            } else {

                dispatch(preloaderForLogin(false))

            } dispatch(firstRequest())
        })
    }
}

export const log = (email, password, rememberMe = false) => {

    return (dispatch) => {
        loginAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(error(null))
                dispatch(login())

            } else {

                dispatch(error(response.messages[0]))
            }

        })
    }
}



export const logOut = () => {
    return (dispatch) => {

        loginAPI.outlogin().then(response => {
            let data = { activeIDUser: null, email: null, login: null }
            response.resultCode === 0 ?
                dispatch(setDateUser(data, false))

                :
                console.log("Error logOut")
        })
    }
}








export default AuthReducer;