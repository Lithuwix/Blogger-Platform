import {AppThunk} from "../store/store";
import {AxiosResponse} from "axios";
import {BlogItemType, blogsAPI, ResponseBlogsType} from "../api/api";
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
        case 'SET-BLOGS': {
            return {...state, items: [...action.payload.blogs]}
        }
        default:
            return state
    }
}

// action creators
export const setBlogsDataAC = (blogs: BlogItemType[]) => {
    return {
        type: 'SET-BLOGS',
        payload: {blogs}
    } as const
}

// thunks
export const getBlogsTC = (): AppThunk => async (dispatch) => {
    try {
        const res: AxiosResponse<ResponseBlogsType> = await blogsAPI.getBlogsData()
        dispatch(setAppStatusAC('loading'))
        dispatch(setBlogsDataAC(res.data.items))
    }
    catch (e) {
        console.log(e)
    }
    finally {
        dispatch(setAppStatusAC('idle'))
        // dispatch(setInitializedAppAC(false))
        // dispatch(setInitializedAppAC(true))
    }
}

// types
type initialAppStateType = typeof initialState

export type BlogsActionsType =
    | ReturnType<typeof setBlogsDataAC>
//   |  >>> !
