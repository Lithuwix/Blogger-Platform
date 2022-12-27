import React from 'react';
import s from "./Blog.module.css"

import {SvgSelector} from "../../../../features/svgSelector/svgSelector";
import {BlogItemType} from "../../../../api/api";

export const Blog = (props: BlogItemType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div>
                    <div className={s.blog_img}><SvgSelector svgName='photo'/></div>
                </div>
                <div className={s.blog_info}>
                    <h3 className={s.blog_title}>{props.name}</h3>
                    <p className={s.side_link}>
                        WebSite: <a href={props.websiteUrl} target='_blank' rel="noreferrer">{props.websiteUrl}</a>
                    </p>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr className={s.line}/>
        </div>
    );
};

