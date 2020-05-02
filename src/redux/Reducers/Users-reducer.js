


let initialState = {
    users: [],
    urlPage: { page: 1, pageSize: 10, totalUsersCount: 0 },
    preloaded: false
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
        case "SET_USERS":
            {
                return { ...state, users: active.users }
            }
        case "UPDATE_TOTAL_COUNT":
            {
                return { ...state, urlPage: { ...state.urlPage, totalUsersCount: active.count } }
            }
        case "UPDATE_PAGE":
            {
                return { ...state, urlPage: { ...state.urlPage, page: active.count } }
            }
        case "UPDATE_PRELOAFER":
            {
                return {...state,preloaded:active.isFetching }
            }


        default: return copyState;
    }

    return copyState;
}
export const followAC = (userId) => ({ type: 'FOLLOW', userId: userId })
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId: userId })
export const setUsersAC = (user) => ({ type: 'SET_USERS', users: user })
export const updateTotalCountAC = (int) => ({ type: 'UPDATE_TOTAL_COUNT', count: int })
export const updatePageAC = (int) => ({ type: 'UPDATE_PAGE', count: int })
export const updatePreloaderAC = (count) => ({ type: 'UPDATE_PRELOAFER',isFetching:count})


export default UsersReducer