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
            { id: 0, autor: 0, post: "Hi,how are you?", like: 5 },
            { id: 1, autor: 1, post: "It`s my first post", like: 6 }
        ]
    },
    DialogePage: {
        arrMessage: [
            { id: 0, sender: 0, recipient: 1, message: "How" },
            { id: 1, sender: 1, recipient: 0, message: "are" },
            { id: 2, sender: 0, recipient: 2, message: "You" },
            { id: 3, sender: 1, recipient: 2, message: "?" },
        ]
    }

}

export let LikeforPost = (idPost, likePost) => {

    state.ProfilePage.arrPost.map((Post) => state.ProfilePage.arrPost[Post.id].like = likePost )
    rerenderTree();
}

export let SaveActiveDialog = (idDialog) => {
    state.activeDialog = idDialog
    rerenderTree();
}
export let SendMessages = (Message) => {
    let NewMessage = {
        id: state.DialogePage.arrMessage.length,
        sender: state.activeIDUser,
        recipient: state.activeDialog,
        message: Message
    }
    state.DialogePage.arrMessage.push(NewMessage);
    rerenderTree();
}

export let addPost = (PostMassage) => {

    if (PostMassage !== "") {
        let NewItem = {
            id: state.ProfilePage.arrPost.length,
            autor: state.activeIDUser,
            post: String(PostMassage),
            like: 0
        }
        state.ProfilePage.arrPost.push(NewItem);
        rerenderTree();
    }
}

export default state