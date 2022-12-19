import React, {useEffect} from 'react';
import s from './Posts.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Post} from "./Post/Post";
import {getPostsTC} from "../../../reducers/posts-reducer";

export const Posts = () => {

    const data = useAppSelector((state) => state.posts.items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
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
                            createdAt={el.createdAt.replace(/^(\d+)\-(\d+)\-(\d+)\D.+$/, '$3.$2.$1')}
                        />
                    )
                })}
            </div>
        </div>
    );
};

