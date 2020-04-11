
let common
export const sub = (obs) => {
    common = obs.getState().common
}
let initialState = {
    arrPost: [
        { id: 0, autor: 0, post: "Hi,how are you?", likes: [{ id: 0 }, { id: 2 }] },
        { id: 1, autor: 1, post: "It`s my first post", likes: [{ id: 1 }] }
    ],
    NewPostText: "",
}

const ProfileReducer = (state = initialState, active) => {
    switch (active.type) {
        case "ADD-POST":
            if (state.NewPostText !== "") {
                let NewItem = {
                    id: state.arrPost.length,
                    autor: common.activeIDUser,
                    post: state.NewPostText,
                    likes: []
                }
                state.arrPost.push(NewItem);
                state.NewPostText = "";
            }
            break;
        case "UPDATE-POST-TEXT": state.NewPostText = active.value;
            break;
        case "LIKE-FOR-POST":
            let like = { id: common.activeIDUser }
            let newArr = []
            let boolLike = false;
            state.arrPost[active.value].likes.map((post) => {
                console.log(newArr);
                common.activeIDUser === post.id ? boolLike = true : newArr.push(post);

                return newArr
            })
            boolLike === false ? state.arrPost[active.value].likes.push(like) : state.arrPost[active.value].likes = newArr;
            break;

        default: return state
    }

    return state
}

export const updatePostTextActionCreator = (text) => ({
    type: 'UPDATE-POST-TEXT',
    value: text
})
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const likeForPostActiveCreator = (value) => ({
    type: "LIKE-FOR-POST",
    value: value
})

export default ProfileReducer