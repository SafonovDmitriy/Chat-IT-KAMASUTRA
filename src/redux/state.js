import { rerenderTree } from "./../render"
let state = {
    activeIDUser: 0,
    ProfilePage: {
        ProfileDate: [
            { id: 0, user: `Dmitriy Safonov`, dateOfBirth: `4 June`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://i.mycdn.me/i?r=A4CR_9dgEMthBxFY0W6Al3xC9TJP4EcSJih9n8pxqyRpLrvhV5SVglBxKL7Ydyec3HjCuK7PtzS90vS4RLT7YwGfk-5NTdSspqIvEmCdTMPkts4C8pUwWiVyT9F2kC9iTwAwuCeMb6ABmoa9-HrsY35MrGlVgRUtOqid2G13X9oagCfXyVIJfEGo-kDFW-DILp-R" },
            { id: 1, user: `Diana Barsukova`, dateOfBirth: `31`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1" }
        ],
        arrPost: [
            { id: 0, autor: 0, post: "Hi,how are you?", like: 5 },
            { id: 1, autor: 1, post: "It`s my first post", like: 6 }
        ]
    },
    DialogePage: {
        DialogData: [
            { id: 0, name: "Dima" },
            { id: 1, name: "Diana" }
        ],
        arrMessage: [
            { id: 0, human: 1, img: "", message: "How" },
            { id: 1, human: 1, img: "", message: "are" },
            { id: 2, human: 2, img: "", message: "You" },
            { id: 3, human: 2, img: "", message: "?" },
        ]
    }

}

export let addPost = (PostMassage) => {
    alert(state.ProfilePage.arrPost.length)
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