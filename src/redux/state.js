let store = {
    _state: {
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

    },
    getState() {
        return this._state
    },
    _rerenderTree() {
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },
    updatePostText(text) {
        this._state.ProfilePage.NewPostText = text;
        this._rerenderTree();
    },
    updateMessageText(text) {
        this._state.DialogePage.NewMessageText = text;
        this._rerenderTree();
    },
    LikeforPost(idPost) {
        let like = { id: this._state.activeIDUser }
        let newArr = []
        let boolLike = false;
        this._state.ProfilePage.arrPost[idPost].likes.map((post) => {
            this._state.activeIDUser === post.id ? boolLike = true : newArr.push(post);
        })
        boolLike === false ? this._state.ProfilePage.arrPost[idPost].likes.push(like) : this._state.ProfilePage.arrPost[idPost].likes = newArr;
        this._rerenderTree();
    },

    SaveActiveDialog(idDialog) {

        this._state.activeDialog = idDialog
        this._rerenderTree();
    },
    SendMessages() {
        if (this._state.DialogePage.NewMessageText !== "" & this._state.activeDialog !== -1) {
            let NewMessage = {
                id: this._state.DialogePage.arrMessage.length,
                sender: this._state.activeIDUser,
                recipient: this._state.activeDialog,
                message: this._state.DialogePage.NewMessageText
            }
            this._state.DialogePage.arrMessage.push(NewMessage);
            this._state.DialogePage.NewMessageText = ""
            this._rerenderTree();
        }

    },

    addPost() {

        if (this._state.ProfilePage.NewPostText !== "") {
            let NewItem = {
                id: this._state.ProfilePage.arrPost.length,
                autor: this._state.activeIDUser,
                post: this._state.ProfilePage.NewPostText,
                likes: []
            }
            this._state.ProfilePage.arrPost.push(NewItem);
            this._state.ProfilePage.NewPostText = "";
            this._rerenderTree();
        } return null;
    },
}





export default store