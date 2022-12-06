import {AppThunk} from "../store/store";
import {postsAPI} from "../api/api";

const initialState: initialStateType = {

}

export const postsReducer = (state: initialAppStateType = initialState, action: BlogsActionType): initialAppStateType => {
    switch (action.type) {
        case 'ALL': {
            return state
        }
        default:
            return state
    }
}

// action creators
export const setPostsDataAC = (posts: any) => {
    return {
        type: 'ALL',
        payload: {posts}
    } as const
}

// thunks
export const getPostsTC = (): AppThunk => async (dispatch) => {
    try {
        const res: any = await postsAPI.getPostsData()
        // dispatch(setPostsDataAC(res.data))
    } catch (e) {
        console.log(e)
    }
}

// types
type initialAppStateType = typeof initialState
export type BlogsActionType =
    | ReturnType<typeof setPostsDataAC>
//   |  >>> !!



type initialStateType = {

}
