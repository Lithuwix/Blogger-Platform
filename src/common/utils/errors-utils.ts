import axios, {AxiosError} from "axios";

import {AppRootActionsType} from "../../store/store";

import {setAppErrorAC} from "../../reducers/auth-reducer";

import {Dispatch} from "redux";

export const errorHandlerUtil = (e: any, dispatch: Dispatch<AppRootActionsType>) => {
    const err = e as Error | AxiosError
    if (axios.isAxiosError(err)) {
        const error = err.response?.data ? (err.response.data as string) : err.message
        console.log(error)
        dispatch(setAppErrorAC(error))
    } else {
        dispatch(setAppErrorAC(`Native error ${err.message}`))
    }
}