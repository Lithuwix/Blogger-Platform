import React, {useCallback, useEffect} from 'react';

import s from './Posts.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import {getPostsTC} from "../../../reducers/posts-reducer";

import {Navigate} from "react-router-dom";

import {Post} from "./Post/Post";
import {Navigation} from "../../../features/Navigation/Navigation";
import {getRandomFromArr} from "../../utils/temp-images-utils";

const PostsFC = () => {

    const data = useAppSelector((state) => state.posts.items)
    const isLoggedIn = useAppSelector(((state) => state.auth.isLoggedIn))

    const dispatch = useAppDispatch()

    const numsForPosts = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    const getRandomFromArrHandler = useCallback(() => {
        return getRandomFromArr(numsForPosts)
    }, [])

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
                                postID={el.id}
                                getRandomFromArr={getRandomFromArrHandler}
                                title={el.title}
                                blogTitle={el.blogName}
                                createdAt={el.createdAt.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$3.$2.$1')}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export const Posts = React.memo(PostsFC)