let initialState = {

    activeIDUser: 0,
    activeDialog: -1,
    ProfileDate: [
        { id: 0, user: `Dmitriy Safonov`, dateOfBirth: `4 June`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://i.mycdn.me/i?r=A4CR_9dgEMthBxFY0W6Al3xC9TJP4EcSJih9n8pxqyRpLrvhV5SVglBxKL7Ydyec3HjCuK7PtzS90vS4RLT7YwGfk-5NTdSspqIvEmCdTMPkts4C8pUwWiVyT9F2kC9iTwAwuCeMb6ABmoa9-HrsY35MrGlVgRUtOqid2G13X9oagCfXyVIJfEGo-kDFW-DILp-R" },
        { id: 1, user: `Diana Barsukova`, dateOfBirth: `31`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1" },
        { id: 2, user: `name 3`, dateOfBirth: `31`, city: `Zaporozhye`, website: "http://localhost:3000/profile", avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" },
    ]



}

const CommonReducer = (state = initialState) => { return state}
export default CommonReducer;