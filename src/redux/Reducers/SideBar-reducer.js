

let initialState = {
    activeDialog: -1,
    activeURL: "",
    sideBarMenu:
        [
            { id: 0, title: "Profile", href: '/profile/', auth: true },
            { id: 1, title: "Messages", href: "/messages/", auth: true },
            { id: 2, title: "News", href: "/news/", auth: false },
            { id: 3, title: "Music", href: "/music/", auth: false },
            { id: 4, title: "Find User", href: "/FindUser/", auth: false },
            { id: 5, title: "Setting", href: "/setting/", auth: false }
        ]

}

const SideBarReducer = (state = initialState, active) => {



    switch (active.type) {

        case "UPDATE-URL":
            return { ...state, activeURL: active.url };
        case "UPDATE-PROFILE-URL":
            state.sideBarMenu.map((item) => {
                if (item.href === "/profile/") {
                    item.href = item.href + active.idUser
                    return { ...state.sideBarMenu[item.id], ...item };
                } else {
                    return { ...state.sideBarMenu[item.id] };
                }

            })
            return { ...state }
            


        default: return state
    }
}

export const updateUrlActive = (href) => ({ type: 'UPDATE-URL', url: href })
export const updateProfileURL = (idUser) => ({ type: 'UPDATE-PROFILE-URL', idUser: idUser })


export default SideBarReducer