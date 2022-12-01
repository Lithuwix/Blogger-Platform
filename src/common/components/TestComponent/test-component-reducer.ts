import {AppThunk} from "../../../store/store";
import {testsAPI} from "../../../api/api";

const initialState: any = []

export const testComponentReducer = (state: initialAppStateType = initialState, action: TestComponentActionType): initialAppStateType => {
    switch (action.type) {
        case 'GET-BLOGS': {
            console.log(action.payload.data.data.items)
            return action.payload.data.data.items
        }
        default: {
            return state
        }
    }
}

// action creators
export const getBlogsDataAC = (data: any) => {
    return {
        type: 'GET-BLOGS',
        payload: {data}
    } as const
}

// thunks
export const getBlogsTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await testsAPI.getTestBlogsData()
        console.log('ok')
        console.log(res)
        dispatch(getBlogsDataAC(res))
    } catch (e: any) {
        console.log('catch')
    } finally {
        console.log('finally')
    }
}

// types
type initialAppStateType = typeof initialState
export type TestComponentActionType =
    | ReturnType<typeof getBlogsDataAC>
//   |  >>> !!
