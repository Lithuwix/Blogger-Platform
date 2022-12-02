import React, {useEffect} from 'react';
import s from './Blogs.module.css'
import {useAppSelector} from "../../hooks/hooks";

import {Blog} from "./Blog/Blog";

export const Blogs = () => {

    // const title = useAppSelector((state) => state.blogs.blogTitle)

    useEffect( () => {
        console.log('HELLO')

    }, [])

    return (
        <div className={s.container}>
            -- blogs
            {/*title = {title}*/}

            <Blog/>

        </div>
    );
};

