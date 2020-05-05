let initialState = {

    activeIDUser: null,
    email: null,
    login: null,
}




const AuthReducer = (state = initialState, active) => {

    switch (active.type) {
        case "SET_DATE_USER":
           
            return { ...state, ...active.data }
        default: return { ...state }
    }
}



export const setDateUser = (data) => ({
    type: "SET_DATE_USER",
    data

})
export default AuthReducer;