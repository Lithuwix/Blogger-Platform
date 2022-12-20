import {AppThunk} from "../store/store";

const initialState: InitialStateType = {
    appStatus: 'idle',
    isInitialized: false,
    // error: null as string | null
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-APP-INITIALIZED' : {
            return {...state, isInitialized: action.payload.isInitialized}
        }
        case 'SET-APP-STATUS' : {
            return {...state, appStatus: action.payload.appStatus}
        }
        default: {
            return state
        }
    }
}

// action creators
export const setInitializedAppAC = (isInitialized: boolean) => {
    return {
        type: 'SET-APP-INITIALIZED',
        payload: {isInitialized}
    } as const
}
export const setAppStatusAC = (appStatus: 'idle' | 'loading') => {
    return {
        type: 'SET-APP-STATUS',
        payload: {appStatus}
    } as const
}

// thunks
export const initializeAppTC = (): AppThunk => async (dispatch) => {
    try {
        await setTimeout(() => {
            dispatch(setInitializedAppAC(true))
        }, 1000)
    } catch (e) {
    } finally {
        dispatch(setInitializedAppAC(false))
    }
}

// types
type InitialStateType = {
    appStatus: 'idle' | 'loading'
    isInitialized: boolean
}

export type AppActionsType =
    | ReturnType<typeof setInitializedAppAC>
    | ReturnType<typeof setAppStatusAC>
//   |  >>> !