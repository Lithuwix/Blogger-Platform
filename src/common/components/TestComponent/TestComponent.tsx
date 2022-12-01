import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getBlogsTC} from "./test-component-reducer";

export const TestComponent = () => {

    const dispatch = useAppDispatch()
    const initialData = useAppSelector(state => state.test)

    useEffect(() => {
        console.log('Effect')
        dispatch(getBlogsTC())
    }, [dispatch])

    return (
        <div>
            <h2>--- --- --- test component</h2>
            <div>
                {initialData.map((el: any) => {
                    return (
                        <div key={el.id}>
                            <div>{el.id}</div>
                            <div>{el.name}</div>
                            <div>{el.createdAt}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
