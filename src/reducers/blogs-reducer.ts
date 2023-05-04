import {AppThunk} from "../store/store";

import {AxiosResponse} from "axios";

import {blogsAPI, BlogItemType, ResponseBlogsType} from "../api/api";

import {setAppStatusAC} from "./app-reducer";

const initialState: mainStateType = {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
    totalCount: 0,
    items: [],
    currentBlogInfo: {}
}

export const blogsReducer = (state: initialAppStateType = initialState, action: BlogsActionsType): initialAppStateType => {
    switch (action.type) {
        case 'BLOGS/SET-BLOGS': {
            return {...state, items: [...action.payload.blogs]}
        }
        case 'BLOGS/SET-CURRENT-BLOG-INFO': {
            return {...state, currentBlogInfo: action.payload.blogInfo}
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
export const setCurrentBlogDataAC = (blogInfo: BlogItemType) => {
    return {
        type: 'BLOGS/SET-CURRENT-BLOG-INFO',
        payload: {blogInfo}
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



export const getCurrentBlogTC = (blogID: string): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res: AxiosResponse<BlogItemType> = await blogsAPI.getCurrentBlog(blogID)
        dispatch(setCurrentBlogDataAC(res.data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// types
type initialAppStateType = typeof initialState

type mainStateType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: BlogItemType[]
    currentBlogInfo: BlogItemType | {}
}

export type BlogsActionsType =
    | ReturnType<typeof setBlogsDataAC>
    | ReturnType<typeof setCurrentBlogDataAC>
//   |  >>> !
