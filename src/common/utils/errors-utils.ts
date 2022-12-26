import axios, {AxiosError} from "axios";

import {AppRootActionsType} from "../../store/store";

import {setAppMessageForUserAC} from "../../reducers/auth-reducer";

import {Dispatch} from "redux";

export const errorHandlerUtil = (e: any, dispatch: Dispatch<AppRootActionsType>) => {
    const err = e as Error | AxiosError
    if (axios.isAxiosError(err)) {
        const error: any = err.response?.data ? (err.response.data as string) : err.message
        if (typeof error === 'object') {
            let temp = ''
            error.errorsMessages.map((m: any) => temp += `\n${m.message}\n`)
            // console.log(temp)
            // dispatch(setAppMessageForUserAC(null))
        }
        else {
            // console.log(err.message)
        }
    }
    else {
        // console.log(`Native error ${err.message}`)
    }
}