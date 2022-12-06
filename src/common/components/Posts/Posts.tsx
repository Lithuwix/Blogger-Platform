import React, {useEffect} from 'react';
import s from './Posts.module.css'

import {useAppDispatch} from "../../hooks/hooks";

export const Posts = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('posts effect')
        // dispatch(getBlogsTC())
    }, [])

    return (
        <div className={s.container}>
            <h2 className={s.title}>Posts</h2>
            <hr className={s.line}/>
        </div>
    );
};

