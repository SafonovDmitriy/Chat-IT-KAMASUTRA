
let initialState = {
    activeDialog: -1,
    activeURL: "",
    sideBarMenu:
        [
            { id: 0, title: "Profile", href: '/profile/', auth: true },
            { id: 1, title: "Messages", href: "/messages/", auth: true },
            { id: 2, title: "News", href: "/news/", auth: false },
            { id: 3, title: "Music", href: "/music/", auth: true },
            { id: 4, title: "Find User", href: "/FindUser/", auth: false },
            { id: 5, title: "Setting", href: "/setting/", auth: false }
        ]

}

const SideBarReducer = (state = initialState, active) => {


    
    switch (active.type) {

        case "UPDATE-URL":
            return { ...state, activeURL: active.url }
        case "UPDATE-PROFILE-URL":
            state.sideBarMenu.map((item) => {
                console.log("/profile/" + active.idUser)
                if (item.href === "/profile/") {
                    
                    return { ...state.sideBarMenu, href: "/profile/" + active.idUser }
                } return { ...state }
            }
            )
            break

        default: return { ...state }
    }
}

export const updateUrlActive = (href) => ({ type: 'UPDATE-URL', url: href })
export const updateProfileURL = (idUser) => ({ type: 'UPDATE-PROFILE-URL', idUser: idUser })


export default SideBarReducer