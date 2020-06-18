import { UsersAPI, subscribeAPI } from "../../api/api"

let initialState = {
    users: [],
    urlPage: { countPage: 1, pageSize: 10, totalUsersCount: 0 },
    preloaded: false,
    followingInProgress: []
}

const UsersReducer = (state = initialState, active) => {

    const followUnfollowFlow = (value, userID) => {

        return {
            ...state, users: state.users.map(u => {
                return u.id === userID ?
                    { ...u, followed: value } : { ...u }
            })
        }
    }

    switch (active.type) {

        case "FOLLOW":
            return followUnfollowFlow(true, active.userId)

        case "UNFOLLOW":
            return followUnfollowFlow(false, active.userId)

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


        default: return { ...state };
    }
}

export const follow = (userId) => ({ type: 'FOLLOW', userId: userId })
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId: userId })
export const setUsers = (user) => ({ type: 'SET_USERS', users: user })
export const updateTotalCount = (int) => ({ type: 'UPDATE_TOTAL_COUNT', count: int })
export const updatePage = (int) => ({ type: 'UPDATE_PAGE', count: int })
export const updatePreloader = (count) => ({ type: 'UPDATE_PRELOAFER', isFetching: count })
export const updateFollowing = (followingInProgress, idUser) => ({ type: 'UPDATE_FOLLOWING', followingInProgress, idUser })


export const getUsers = (countPage, pageSize) => {
    return async (dispatch) => {
        dispatch(updatePage(countPage))
        dispatch(updatePreloader(true));
        let response = await UsersAPI.getUsers(countPage, pageSize)
        dispatch(updatePreloader(false));
        dispatch(updateTotalCount(response.totalCount))
        dispatch(setUsers(response.items))
    }
}
export const followT = (idUser) => {
    return async (dispatch) => {
        dispatch(updateFollowing(true, idUser))
        let response = await subscribeAPI.postFollow(idUser)
        if (response.resultCode === 0) { dispatch(follow(idUser)) }
        dispatch(updateFollowing(false, idUser))
    }
}
export const unfollowT = (idUser) => {
    return async (dispatch) => {
        dispatch(updateFollowing(true, idUser))
        let response = await subscribeAPI.deleteFollow(idUser)
        if (response.resultCode === 0) { dispatch(unfollow(idUser)) }
        dispatch(updateFollowing(false, idUser))
    }
}


export default UsersReducer