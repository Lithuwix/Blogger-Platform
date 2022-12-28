import React, {useEffect} from 'react';

import s from './Posts.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Post} from "./Post/Post";
import {getPostsTC} from "../../../reducers/posts-reducer";
import {Navigation} from "../../../features/Navigation/Navigation";
import {Navigate} from "react-router-dom";

export const Posts = () => {

    const dispatch = useAppDispatch()

    const data = useAppSelector((state) => state.posts.items)
    const isLoggedIn = useAppSelector(((state) => state.auth.isLoggedIn))

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getPostsTC())
        }
    }, [dispatch, isLoggedIn])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <>
            <Navigation activeLink='posts'/>
            <div className={s.container}>
                <h2 className={s.title}>Posts</h2>
                <hr className={s.line}/>
                <div className={s.posts_wrapper}>
                    {data.map((el) => {
                        return (
                            <Post
                                key={el.id}
                                title={el.title}
                                shortDescription={el.shortDescription}
                                createdAt={el.createdAt.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$3.$2.$1')}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

