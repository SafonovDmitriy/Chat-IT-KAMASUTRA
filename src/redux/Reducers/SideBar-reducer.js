


let initialState = {
    activeDialog: -1,
    sideBarMenu:
        [
            { id: 0, title: "Profile", href: "/profile/" },
            { id: 1, title: "Message", href: "/messages/" },
            { id: 2, title: "News", href: "/news/" },
            { id: 3, title: "Music", href: "/music/" },
            { id: 4, title: "Find User", href: "/FindUser/" },
            { id: 5, title: "Setting", href: "/setting/" }
        ]

}

const SideBarReducer = (state = initialState, active) => {

    let copyState = { ...state }

    switch (active.type) {
        case "UPDATE-URL":
            break;
        default: return state;
    }

    return copyState;
}

export const updateUrlActive = () =>
    ({
        type: 'UPDATE-URL',
    })


export default SideBarReducer