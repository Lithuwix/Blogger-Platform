import React, {useEffect} from 'react';
import s from './Blogs.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import {Blog} from "./Blog/Blog";
import {getBlogsTC} from "../../../reducers/blogs-reducer";
import {Navigation} from "../../../features/Navigation/Navigation";

export const Blogs = () => {

    const blogs = useAppSelector((state) => state.blogs.items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getBlogsTC())
    }, [])

    return (
        <>
            <Navigation activeLink='blogs'/>
            <div className={s.container}>
                <h2 className={s.title}>Blogs</h2>
                <hr className={s.line}/>
                <div className={s.blogs_items_container}>
                    {blogs.map((b) => {
                        return (
                            <Blog
                                key={b.id}
                                description={b.description}
                                id={b.id}
                                name={b.name}
                                createdAt={b.createdAt}
                                websiteUrl={b.websiteUrl}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

