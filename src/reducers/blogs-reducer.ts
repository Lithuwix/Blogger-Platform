import {AppThunk} from "../store/store";
import {blogsAPI, ResponseBlogsType} from "../api/api";
import {AxiosResponse} from "axios";

const initialState: initialStateType = {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    blogItems: []
}

export const blogsReducer = (state: initialAppStateType = initialState, action: BlogsActionType): initialAppStateType => {
    switch (action.type) {
        case 'SET-BLOGS': {
            return {...state, blogItems: [...action.payload.items]}
        }
        default:
            return state
    }
}

// action creators
export const setBlogsDataAC = (data: ResponseBlogsType) => {
    return {
        type: 'SET-BLOGS',
        payload: data
    } as const
}

// thunks
export const getBlogsTC = (): AppThunk => async (dispatch) => {
    try {
        const res: AxiosResponse<ResponseBlogsType> = await blogsAPI.getBlogsData()
        dispatch(setBlogsDataAC(res.data))
    } catch (e) {
        console.log(e)
    }
}

// types
type initialAppStateType = typeof initialState
export type BlogsActionType =
    | ReturnType<typeof setBlogsDataAC>
//   |  >>> !!



type initialStateType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    blogItems: blogItemType[]
}

export type blogItemType = {
    id: string
    name: string
    websiteUrl: string
    description: string
    createdAt: string
}