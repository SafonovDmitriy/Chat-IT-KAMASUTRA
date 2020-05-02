
let common
export const sub = (obs) => {
    common = obs
}
let initialState = {
    arrPost: [
        { id: 0, autor: 0, post: "Hi,how are you?", likes: [{ id: 0 }, { id: 2 }] },
        { id: 1, autor: 1, post: "It`s my first post", likes: [{ id: 1 }] }
    ],
    NewPostText: "",
    selectUser:0,
    preloader:false
}

const ProfileReducer = (state = initialState, active) => {
    let copyState = { ...state }


    switch (active.type) {
        case "ADD-POST":
            if (state.NewPostText !== "") {
                let NewItem = {
                    id: state.arrPost.length,
                    autor: common.activeIDUser,
                    post: state.NewPostText,
                    likes: []
                }
                copyState.arrPost = [...state.arrPost]
                copyState.arrPost.push(NewItem);
                copyState.NewPostText = "";
            }
            break;
        case "SELECT-USER":
        return { ...state,selectUser:active.idUser}
            
        case "UPDATE-POST-TEXT":
            copyState.NewPostText = active.value;
            break;
        case "UPDETE-PRELOADER":
            return {...state,preloader:active.value}
            
        case "LIKE-FOR-POST":
            copyState.arrPost = [...state.arrPost]
            let like = { id: common.activeIDUser }
            let newArr = []
            let boolLike = false;
            copyState.arrPost[active.value].likes.map((post) => {
                common.activeIDUser === post.id ? boolLike = true : newArr.push(post);

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
export const updatePreloader = (value) => ({ type: 'UPDETE-PRELOADER',value })
export const selectUser = (id) => ({ type: 'SELECT-USER',idUser:id })
export const likeForPost = (value) => ({
    type: "LIKE-FOR-POST",
    value: value
})

export default ProfileReducer