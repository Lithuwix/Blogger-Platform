import React from 'react';

import s from "./Blog.module.css"
import "../../../utils/stylesForImages.css"

import {NavLink} from "react-router-dom";

type BlogPropsType = {
    id: string
    name: string
    websiteUrl: string
    description: string
    createdAt: string,
    getRandomFromArr: () => number
}

const BlogFC = (props: BlogPropsType) => {

    const randomClass = `random_${props.getRandomFromArr()}`

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <NavLink to={`:${props.id}`}>
                    <div className={`${s.blog_img} ${randomClass}`}>
                        {/*<SvgSelector svgName='photo'/>*/}
                    </div>
                </NavLink>
                <div className={s.blog_info}>
                    <NavLink to={`:${props.id}`}>
                        <h3 className={s.blog_title}>{props.name}</h3>
                    </NavLink>
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

export const Blog = React.memo(BlogFC)