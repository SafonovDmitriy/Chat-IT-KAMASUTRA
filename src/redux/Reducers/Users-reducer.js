


let initialState = {
    users: [],
    urlPage: { page: 1, pageSize: 10, totalUsersCount: 0 }
}

const UsersReducer = (state = initialState, active) => {
    let copyState = { ...state }
    switch (active.type) {

        case "FOLLOW":
            copyState = {
                ...state, users: state.users.map(u => {
                    if (u.id === active.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
            break;
        case "UNFOLLOW":
            copyState = {
                ...state, users: state.users.map(u => {
                    if (u.id === active.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })

            }
            break;
        case "SETUSERS":
            {
                return { ...state, users: [...state.users, ...active.users] }
            }
        case "UPDATETOTALCOUNT":
            {
                return { ...state, urlPage: { ...state.urlPage, totalUsersCount: active.count } }
            }
        case "UPDATEPAGE":
            {
                return { ...state, urlPage: { ...state.urlPage, page: active.count } }
            }


        default: return copyState;
    }

    return copyState;
}
export const followAC = (userId) =>
    ({
        type: 'FOLLOW',
        userId: userId
    })
export const unfollowAC = (userId) =>
    ({
        type: 'UNFOLLOW',
        userId: userId
    })
export const setUsersAC = (user) =>
    ({
        type: 'SETUSERS',
        users: user
    })
export const updateTotalCountAC = (int) =>
    ({
        type: 'UPDATETOTALCOUNT',
        count: int
    })
export const updatePageAC = (int) =>
    ({
        type: 'UPDATEPAGE',
        count: int
    })

export default UsersReducer