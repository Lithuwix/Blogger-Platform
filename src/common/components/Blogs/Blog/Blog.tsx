import React from 'react';
import s from "./Blog.module.css"
import {blogItemType} from "../../../../reducers/blogs-reducer";
import {SvgSelector} from "../../svgSelector/svgSelector";

export const Blog = (props: blogItemType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.blog_img}><SvgSelector svgName='photo'></SvgSelector> </div>
                <div className={s.blog_info}>
                    <p>{props.name}</p>
                    <p>WebSite: {props.websiteUrl}</p>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr className={s.line}/>
        </div>
    );
};

