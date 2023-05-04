import React, {useEffect} from 'react';

import s from './CurrentBlog.module.css'

import {BlogItemType} from "../../../../api/api";

import {NavLink, useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import {Navigation} from "../../../../features/Navigation/Navigation";

import {getCurrentBlogTC} from "../../../../reducers/blogs-reducer";
import {SvgSelector} from "../../../../features/svgSelector/svgSelector";
import {BasicBreadcrumbs} from "../../../../features/BreadCrumbs/BreadCrumbs";

const CurrentBlogFC = () => {

    const blogInfo = useAppSelector((state) => state.blogs.currentBlogInfo) as BlogItemType

    const dispatch = useAppDispatch()

    const location = useLocation()
    const blogID = location.pathname.slice(8)

    useEffect(() => {
        dispatch(getCurrentBlogTC(blogID))
    }, [dispatch])

    const breadCrumbsItems = [
        {way: blogInfo.name, path: blogID}
    ]

    if (!blogInfo.name) {
        return <></>
    }

    return (
        <>
            <Navigation activeLink="blogs"/>
            <div className={s.container}>
                <BasicBreadcrumbs basePath='Blogs' anotherWays={breadCrumbsItems}/>
                <hr className={s.line}/>
                <NavLink to={'/blogs'}>
                    <div className={s.back_nav}>
                        <SvgSelector svgName='left_arrow'/>
                        <h3 className={s.back_nav_item}> Back to blogs</h3>
                    </div>
                </NavLink>
                <div>
                    <div className={s.blog_pic}/>

                    <div className={s.blog_head_info}>
                        <div>
                            <div className={s.blog_img}/>
                        </div>
                        <div>
                            <h2 className={s.blogTitle}>{blogInfo.name}</h2>
                            <h3 className={s.class}>
                                <span className={s.helperText}>Blog creation date:</span>
                                {blogInfo.createdAt.replace(/^(\d+)-(\d+)-(\d+)\D.+$/, '$3.$2.$1')}</h3>
                            <h3 className={s.class}>
                                <span className={s.helperText}>Website:</span>
                                {blogInfo.websiteUrl}
                            </h3>
                            <h3 className={s.class}>{blogInfo.description}</h3>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export const CurrentBlog = React.memo(CurrentBlogFC)