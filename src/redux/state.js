import { rerenderTree } from "./../render"
let state = {
    activeIDUser: 0,
    activeDialog: -1,
    ProfilePage: {
        ProfileDate: [
            { id: 0, user: `Dmitriy Safonov`, dateOfBirth: `4 June`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://i.mycdn.me/i?r=A4CR_9dgEMthBxFY0W6Al3xC9TJP4EcSJih9n8pxqyRpLrvhV5SVglBxKL7Ydyec3HjCuK7PtzS90vS4RLT7YwGfk-5NTdSspqIvEmCdTMPkts4C8pUwWiVyT9F2kC9iTwAwuCeMb6ABmoa9-HrsY35MrGlVgRUtOqid2G13X9oagCfXyVIJfEGo-kDFW-DILp-R" },
            { id: 1, user: `Diana Barsukova`, dateOfBirth: `31`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1" },
            { id: 2, user: `name 3`, dateOfBirth: `31`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" },
        ],
        arrPost: [
            { id: 0, autor: 0, post: "Hi,how are you?", likes: [{ id: 0 }, { id: 2 }] },
            { id: 1, autor: 1, post: "It`s my first post", likes: [{ id: 1 }] }
        ],
        NewPostText: "",
    },
    DialogePage: {
        NewMessageText: "",
        arrMessage: [
            { id: 0, sender: 0, recipient: 1, message: "How" },
            { id: 1, sender: 1, recipient: 0, message: "are" },
            { id: 2, sender: 0, recipient: 2, message: "You" },
            { id: 3, sender: 1, recipient: 2, message: "?" },
        ]
    }

}


export let updatePostText = (text) => {
    state.ProfilePage.NewPostText = text;
    rerenderTree();
}
export let updateMessageText = (text) => {
    state.DialogePage.NewMessageText = text;
    rerenderTree();
}
export let LikeforPost = (idPost) => {
    let like = { id: state.activeIDUser }
    let newArr = []
    let boolLike = false;
    state.ProfilePage.arrPost[idPost].likes.map((post) => {
        state.activeIDUser === post.id ? boolLike = true : newArr.push(post);
    })
    boolLike === false ? state.ProfilePage.arrPost[idPost].likes.push(like) : state.ProfilePage.arrPost[idPost].likes = newArr;
    rerenderTree();
}

export let SaveActiveDialog = (idDialog) => {
    state.activeDialog = idDialog
    rerenderTree();
}
export let SendMessages = () => {
    if (state.DialogePage.NewMessageText !== "" & state.activeDialog !== -1) {
        let NewMessage = {
            id: state.DialogePage.arrMessage.length,
            sender: state.activeIDUser,
            recipient: state.activeDialog,
            message: state.DialogePage.NewMessageText
        }
        state.DialogePage.arrMessage.push(NewMessage);
        state.DialogePage.NewMessageText = ""
        rerenderTree();
    }

}

export let addPost = () => {

    if (state.ProfilePage.NewPostText !== "") {
        let NewItem = {
            id: state.ProfilePage.arrPost.length,
            autor: state.activeIDUser,
            post: state.ProfilePage.NewPostText,
            likes: []
        }
        state.ProfilePage.arrPost.push(NewItem);
        state.ProfilePage.NewPostText = "";
        rerenderTree();
    } return null;
}

export default state