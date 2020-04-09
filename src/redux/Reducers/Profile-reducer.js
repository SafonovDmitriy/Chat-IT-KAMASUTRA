

const ProfileReducer = (state, active, common) => {

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
                common.activeIDUser === post.id ? boolLike = true : newArr.push(post);
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
export const likeForPostActiveCreator = () => ({ type: "LIKE-FOR-POST" })


export default ProfileReducer