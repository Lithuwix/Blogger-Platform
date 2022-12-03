import {AppThunk} from "../store/store";
import {blogsAPI} from "../api/api";

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
            // console.log(action.payload.data.data.items)
            return {...state, blogItems: [...action.payload.data.data.items]}
        }
        default:
            return state
    }
}

// action creators
export const setBlogsDataAC = (data: any) => {
    return {
        type: 'SET-BLOGS',
        payload: {data}
    } as const
}

// thunks
export const getBlogsTC = (): AppThunk => async (dispatch) => {
    try {
        const res: any = await blogsAPI.getBlogsData()
        dispatch(setBlogsDataAC(res))
        console.log('request for server')
    } catch (e: any) {
        console.log(e)
    }
}

// types
type initialAppStateType = typeof initialState
export type BlogsActionType =
    | ReturnType<typeof setBlogsDataAC>
//   |  >>> !!