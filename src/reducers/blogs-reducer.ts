import {AppThunk} from "../store/store";
import {AxiosResponse} from "axios";
import {blogsAPI, BlogItemType, ResponseBlogsType} from "../api/api";
import {setAppStatusAC} from "./app-reducer";

const initialState: ResponseBlogsType = {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    items: []
}

export const blogsReducer = (state: initialAppStateType = initialState, action: BlogsActionsType): initialAppStateType => {
    switch (action.type) {
        case 'BLOGS/SET-BLOGS': {
            return {...state, items: [...action.payload.blogs]}
        }
        default:
            return state
    }
}

// action creators
export const setBlogsDataAC = (blogs: BlogItemType[]) => {
    return {
        type: 'BLOGS/SET-BLOGS',
        payload: {blogs}
    } as const
}

// thunks
export const getBlogsTC = (): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res: AxiosResponse<ResponseBlogsType> = await blogsAPI.getBlogsData()
        dispatch(setBlogsDataAC(res.data.items))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// types
type initialAppStateType = typeof initialState

export type BlogsActionsType =
    | ReturnType<typeof setBlogsDataAC>
//   |  >>> !
