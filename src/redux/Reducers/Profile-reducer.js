
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
}

const ProfileReducer = (state = initialState, active) => {
    let copyState = { ...state }
    copyState.arrPost=[...state.arrPost]
   

    switch (active.type) {
        case "ADD-POST":
            if (state.NewPostText !== "") {
                let NewItem = {
                    id: state.arrPost.length,
                    autor: common.activeIDUser,
                    post: state.NewPostText,
                    likes: []
                }
               
                copyState.arrPost.push(NewItem);
                copyState.NewPostText = "";
            }
            break;
        case "UPDATE-POST-TEXT":
            
            copyState.NewPostText = active.value;
            break;
        case "LIKE-FOR-POST":
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

export const updatePostTextActionCreator = (text) =>
    ({
        type: 'UPDATE-POST-TEXT',
        value: text

    })
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const likeForPostActiveCreator = (value) => ({
    type: "LIKE-FOR-POST",
    value: value
})

export default ProfileReducer