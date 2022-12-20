import {AppThunk} from "../store/store";
import {setAppStatusAC} from "./app-reducer";
import {AxiosResponse} from "axios";
import {authAPI, ResponseAuthType} from "../api/api";

const initialState: InitialStateType = {
    isLoggedIn: false
}

export const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-IS-LOGGED-IN' : {
            return {...state, isLoggedIn: action.payload.isLoggedIn}
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

// thunks
export const loginTC = (data: any): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res: AxiosResponse<ResponseAuthType> = await authAPI.login(data)
        dispatch(setIsLoggedInOutAC(true))
    } catch (e) {
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// types
type InitialStateType = {
    isLoggedIn: boolean
}

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInOutAC>
//   |  >>> !