


let initialState = {
    users: [],
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

export default UsersReducer