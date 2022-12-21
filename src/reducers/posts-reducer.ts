import {AppThunk} from "../store/store";
import {PostItemType, postsAPI, ResponsePostsType} from "../api/api";
import {AxiosResponse} from "axios";
import {setAppStatusAC} from "./app-reducer";

const initialState: ResponsePostsType = {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    items: []
}

export const postsReducer = (state: initialAppStateType = initialState, action: PostsActionsType): initialAppStateType => {
    switch (action.type) {
        case 'POSTS/SET-POSTS': {
            return {...state, items: action.payload.posts}
        }
        default:
            return state
    }
}

// action creators
export const setPostsDataAC = (posts: PostItemType[]) => {
    return {
        type: 'POSTS/SET-POSTS',
        payload: {posts}
    } as const
}

// thunks
export const getPostsTC = (): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res: AxiosResponse<ResponsePostsType> = await postsAPI.getPostsData()
        dispatch(setPostsDataAC(res.data.items))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// types
type initialAppStateType = typeof initialState
export type PostsActionsType =
    | ReturnType<typeof setPostsDataAC>
//   |  >>> !!