
import { loginAPI, UserStatusAPI } from './../../api/api';

let initialState = {
    preloader: false,
    arrPost: [
        { id: 0, autor: 0, post: "Hi,how are you?", likes: [{ id: 0 }, { id: 2 }] },
        { id: 1, autor: 1, post: "It`s my first post", likes: [{ id: 1 }] }
    ],
    NewPostText: "",
    selectUser: {
        userId: undefined,
        contacts: { facebook: null, github: null, instagram: null, mainLink: null, twitter: null, vk: null, website: null, youtube: null },
        photos: {
            large: null,
            small: null
        },
        status: null,
        aboutMe: null,
        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null

    },


}

const ProfileReducer = (state = initialState, active) => {
    let copyState = { ...state }


    switch (active.type) {
        case "ADD-POST":
            if (state.NewPostText !== "") {
                let NewItem = {
                    id: state.arrPost.length,
                    autor: state.getState().auth.activeIDUser,
                    post: state.NewPostText,
                    likes: []
                }
                copyState.arrPost = [...state.arrPost]
                copyState.arrPost.push(NewItem);
                copyState.NewPostText = "";
            }
            break;
        case "SELECT-USER":

            return { ...state, selectUser: active.user }

        case "UPDATE-POST-TEXT":
           
            copyState.NewPostText = active.value;
            break;
        case "UPDETE-PRELOADER":

            return { ...state, preloader: active.value }
        case "GET-USER-STATUS":

            return { ...state, status: active.status }


        case "LIKE-FOR-POST":
            copyState.arrPost = [...state.arrPost]
            let like = { id: state.getState().auth.activeIDUser }
            let newArr = []
            let boolLike = false;
            copyState.arrPost[active.value].likes.map((post) => {
                state.getState().auth.activeIDUser === post.id ? boolLike = true : newArr.push(post);

                return newArr
            })
            boolLike === false ? copyState.arrPost[active.value].likes.push(like) : copyState.arrPost[active.value].likes = newArr;
            break;

        default: return state
    }

    return copyState
}

export const updatePostText = (text) =>
    ({
        type: 'UPDATE-POST-TEXT',
        value: text

    })
export const addPost = () => ({ type: 'ADD-POST' })
export const updatePreloader = (value) => ({ type: 'UPDETE-PRELOADER', value: value })
export const selectUser = (user) => ({ type: 'SELECT-USER', user: user })
export const likeForPost = (value) => ({ type: "LIKE-FOR-POST", value: value })
export const getUserStatus = (status) => ({ type: "GET-USER-STATUS", status: status })

export const getUserDate = (userId) => {

    return async (dispatch) => {
        if (userId) {
            dispatch(updatePreloader(true))
            let responce = await loginAPI.getUserDate(userId)
            dispatch(selectUser({ ...responce, ...responce.contacts, ...responce.photos }))
            dispatch(updatePreloader(false))
            responce = await UserStatusAPI.getStatus(userId)
            dispatch(getUserStatus(responce.data))
        }
    }
}
export const setStatusUser = (status) => {
    return async (dispatch) => {
        let responce = await UserStatusAPI.setStatus(status)
        if (responce.data.resultCode === 0) {
            dispatch(getUserStatus(status))
        }
    }
}

export default ProfileReducer