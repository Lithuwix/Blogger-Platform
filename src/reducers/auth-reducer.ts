import {AppThunk} from "../store/store";
import {setAppStatusAC} from "./app-reducer";
import {AxiosResponse} from "axios";
import {authAPI, ResponseAuthType} from "../api/api";
import {errorHandlerUtil} from "../common/utils/errors-utils";

const initialState: InitialStateType = {
    isLoggedIn: false,
    appErrorMessage: '',
    appMessageForUser: null
}

export const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-IS-LOGGED-IN' : {
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        }
        case 'SET-APP-ERROR': {
            return {...state, appErrorMessage: action.payload.errorMessage}
        }
        case 'SET-APP-MESSAGE-FOR-USER': {
            return {...state, appMessageForUser: action.payload.message}
        }
        default: {
            return state
        }
    }
}

// action creators
export const setIsLoggedInOutAC = (isLoggedIn: boolean) => {
    return {
        type: 'SET-IS-LOGGED-IN',
        payload: {isLoggedIn}
    } as const
}
export const setAppErrorAC = (errorMessage: string) => {
    return {
        type: 'SET-APP-ERROR',
        payload: {errorMessage}
    } as const
}
export const setAppMessageForUserAC = (message: string | null) => {
    return {
        type: 'SET-APP-MESSAGE-FOR-USER',
        payload: {message}
    } as const
}

// thunks
export const loginTC = (data: any): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authAPI.login(data)
        dispatch(setAppMessageForUserAC(`Welcome ${data.loginOrEmail}!`))
        dispatch(setIsLoggedInOutAC(true))
    } catch (e: any) {
        dispatch(setAppMessageForUserAC('The password or email or Username is incorrect. Please try again'))
        errorHandlerUtil(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// types
type InitialStateType = {
    isLoggedIn: boolean
    appErrorMessage: string
    appMessageForUser: string | null
}

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInOutAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppMessageForUserAC>
//   |  >>> !