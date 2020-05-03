// let common
// export const sub2 = (obs) => {

//     common = obs
// }


let initialState = {
    activeDialog: -1,
    activeURL:"",
    sideBarMenu:
        [
            { id: 0, title: "Profile", href: '/profile/' },
            { id: 1, title: "Messages", href: "/messages/" },
            { id: 2, title: "News", href: "/news/" },
            { id: 3, title: "Music", href: "/music/" },
            { id: 4, title: "Find User", href: "/FindUser/" },
            { id: 5, title: "Setting", href: "/setting/" }
        ]

}

const SideBarReducer = (state = initialState, active) => {



    switch (active.type) {
        case "UPDATE-URL":
          
            return { ...state,activeURL:active.url }
        default: return state;
    }
}

export const updateUrlActive = (href) =>
    ({
        type: 'UPDATE-URL',
        url:href
    })


export default SideBarReducer