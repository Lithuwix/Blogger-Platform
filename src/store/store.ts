import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';

import {AppActionsType, appReducer} from "../reducers/app-reducer";

import {BlogsActionsType, blogsReducer} from "../reducers/blogs-reducer";
import {PostsActionsType, postsReducer} from "../reducers/posts-reducer";

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({
    app: appReducer,
    blogs: blogsReducer,
    posts: postsReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// типизация state
export type AppRootStateType = ReturnType<typeof rootReducer>

// все типы экшенов для всего приложения
export type AppRootActionsType =
    | AppActionsType
    | BlogsActionsType
    | PostsActionsType         /*  ++ here! ++  */

// типизация санки если она возвращает другую санку
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

// типизация dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
