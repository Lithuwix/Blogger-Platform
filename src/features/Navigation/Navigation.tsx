import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import s from './Navigation.module.css'

import {SvgSelector} from "../svgSelector/svgSelector";

type NavigationPropsType = {
    activeLink: 'blogs' | 'posts'
}

export const Navigation = (props: NavigationPropsType) => {

    const [activeLink, setActiveLink] = useState<'blogs' | 'posts'>(props.activeLink)

    const setActiveBlogsLinkHandler = () => {
        setActiveLink('blogs')
    }
    const setActivePostsLinkHandler = () => {
        setActiveLink('posts')
    }

    return (
        <div className={s.container}>
            <div className={s.nav_item}>
                <NavLink onClick={setActiveBlogsLinkHandler} to={'/blogs'}>
                    <div className={s.icon_with_title}>
                        <SvgSelector svgName={activeLink === 'blogs' ? 'list_purple' : 'list'}/>
                        <div className={`${s.nav_title_blogs} ${activeLink === 'blogs' ? s.blogs_active_title : ''}`}>Blogs</div>
                    </div>
                </NavLink>
            </div>
            <div className={s.nav_item}>
                <NavLink onClick={setActivePostsLinkHandler} to={'/posts'}>
                    <div className={s.icon_with_title}>
                        <SvgSelector svgName={activeLink === 'posts' ? 'gallery_purple' : 'gallery'}/>
                        <div  className={`${s.nav_title_posts} ${activeLink === 'posts' ? s.posts_active_title : ''}`}>Posts</div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};