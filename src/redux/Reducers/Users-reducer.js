import { UsersAPI, subscribeAPI } from "../../api/api"

let initialState = {
    users: [],
    urlPage: { countPage: 1, pageSize: 10, totalUsersCount: 0 },
    preloaded: false,
    followingInProgress: []
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
                return { ...state, urlPage: { ...state.urlPage, countPage: active.count } }
            }
        case "UPDATE_PRELOAFER":
            {
                return { ...state, preloaded: active.isFetching }
            }
        case "UPDATE_FOLLOWING":
            {
                return {
                    ...state, followingInProgress:
                        active.followingInProgress ?
                            [...state.followingInProgress, active.idUser] :
                            [state.followingInProgress.filter(id => id !== active.idUser)]

                }
            }


        default: return copyState;
    }

    return copyState;
}

export const follow = (userId) => ({ type: 'FOLLOW', userId: userId })
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId: userId })
export const setUsers = (user) => ({ type: 'SET_USERS', users: user })
export const updateTotalCount = (int) => ({ type: 'UPDATE_TOTAL_COUNT', count: int })
export const updatePage = (int) => ({ type: 'UPDATE_PAGE', count: int })
export const updatePreloader = (count) => ({ type: 'UPDATE_PRELOAFER', isFetching: count })
export const updateFollowing = (followingInProgress, idUser) => ({ type: 'UPDATE_FOLLOWING', followingInProgress, idUser })


export const getUsers = (countPage, pageSize) => {
    return (dispatch) => {
        dispatch(updatePage(countPage))
        dispatch(updatePreloader(true));
        UsersAPI.getUsers(countPage, pageSize).then(response => {
            dispatch(updatePreloader(false));
            dispatch(updateTotalCount(response.totalCount))
            dispatch(setUsers(response.items))
        }
        )
    }
}
export const followT = (idUser) => {
    return (dispatch) => {
        dispatch(updateFollowing(true, idUser))
        subscribeAPI.postFollow(idUser).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(idUser))
            }
            dispatch(updateFollowing(false, idUser))
        })
    }
}
export const unfollowT = (idUser) => {
    return (dispatch) => {
        dispatch(updateFollowing(true, idUser))
        subscribeAPI.deleteFollow(idUser).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollow(idUser))
            }
            dispatch(updateFollowing(false, idUser))
        })
    }
}


export default UsersReducer