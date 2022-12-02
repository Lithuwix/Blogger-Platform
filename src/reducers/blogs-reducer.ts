import {AppThunk} from "../store/store";
import {blogsAPI} from "../api/api";

const initialState: any = {
    blogTitle: '-- title --'
}

export const blogsReducer = (state: initialAppStateType = initialState, action: BlogsActionType): initialAppStateType => {
    switch (action.type) {
        case 'SET-BLOGS': {
            return state
        }
        default:
            return state
    }
}

// action creators
export const setBlogsDataAC = (data: any) => {
    return {
        type: 'SET-BLOGS'
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