let common
export const sub2 = (obs) => {
    common = obs
}


let initialState = {
    activeDialog: -1,
    sideBarMenu:
        [
            { id: 0, title: "Profile", href: "/profile/" },
            { id: 1, title: "Message", href: "/messages/" },
            { id: 2, title: "News", href: "/news/" },
            { id: 3, title: "Music", href: "/music/" },
            { id: 4, title: "Setting", href: "/setting/" }
        ]

}

const SideBarReducer = (state = initialState, active) => {

    let copyState = { ...state }
    

    switch (active.type) {
        case "UPDATE-URL":
            if(common.activeDialog!==-1){
                copyState.sideBarMenu=[...state.sideBarMenu]
               
                copyState.sideBarMenu.map((item)=>{item.href==="/messages/"?item.href="/messages/"+common.activeDialog+"/":console.log(">")})
            }
           
          
            break;
        default: return copyState;
    }

    return copyState;
}

export const updateUrlActive = () =>
    ({
        type: 'UPDATE-URL',
    })


export default SideBarReducer