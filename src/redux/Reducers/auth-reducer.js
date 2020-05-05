

let initialState = {

    activeIDUser: null,
    email: null,
    login: null,
    isAuth:false,
    avatar:''
}




const AuthReducer = (state = initialState, active) => {

    switch (active.type) {
        case "SET_DATE_USER":
           
            return { ...state, ...active.data,isAuth:true }
        case "SET_PICTURE_USER":
           
            return { ...state, avatar:active.urlPicture }
        default: return { ...state }
    }
}



export const setDateUser = (data) => ({
    type: "SET_DATE_USER",
    data

})
export const setPictureUser = (urlPicture) => ({
    type: "SET_PICTURE_USER",
    urlPicture

})
export default AuthReducer;