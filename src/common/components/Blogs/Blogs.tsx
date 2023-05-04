import React, {useCallback, useEffect} from 'react';

import s from './Blogs.module.css'

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import {Blog} from "./Blog/Blog";
import {Navigation} from "../../../features/Navigation/Navigation";

import {getBlogsTC} from "../../../reducers/blogs-reducer";

import {Navigate} from "react-router-dom";

import {SearchInput} from "../../../features/SearchInput/SearchInput";
import {SortSelect} from "../../../features/SortSelect/SortSelect";
import {getRandomFromArr} from "../../utils/temp-images-utils";
import {BasicBreadcrumbs} from "../../../features/BreadCrumbs/BreadCrumbs";

const BlogsFC = () => {

    const blogs = useAppSelector((state) => state.blogs.items)
    const isLoggedIn = useAppSelector(((state) => state.auth.isLoggedIn))

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getBlogsTC())
        }
    }, [dispatch, isLoggedIn])

    const numsForBlogs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const getRandomFromArrHandler = useCallback(() => {
        return getRandomFromArr(numsForBlogs)
    }, [])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <>
            <Navigation activeLink='blogs'/>
            <div className={s.container}>
                <BasicBreadcrumbs basePath='Blogs'/>
                <hr className={s.line}/>
                <div className={s.search_sort_wrapper}>
                    <SearchInput/>
                    <SortSelect/>
                </div>
                <div className={s.blogs_items_container}>
                    {blogs.map((b) => {
                        return (
                            <Blog
                                key={b.id}
                                getRandomFromArr={getRandomFromArrHandler}
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

export const Blogs = React.memo(BlogsFC)