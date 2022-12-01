import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TestComponentActionType, testComponentReducer} from "../common/components/TestComponent/test-component-reducer";

const rootReducer = combineReducers({
    test: testComponentReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// типизация state
export type AppRootStateType = ReturnType<typeof rootReducer>

// все типы экшенов для всего приложения
export type AppRootActionsType = TestComponentActionType          /*  ++ here! ++  */

// типизация санки если она возвращает другую санку
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>

// типизация dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>
