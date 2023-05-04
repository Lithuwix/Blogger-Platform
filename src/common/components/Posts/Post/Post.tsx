import React from 'react';

import s from './Post.module.css'

import {SvgSelector} from "../../../../features/svgSelector/svgSelector";

import {NavLink} from "react-router-dom";

type PostPropsType = {
    postID: string
    title: string
    blogTitle: string
    createdAt: string
    getRandomFromArr: () => number
}

const PostFC = (props: PostPropsType) => {

    const randomClass = `random_${props.getRandomFromArr()}`

    return (
        <div className={s.post_wrapper}>
            <NavLink to={`:${props.postID}`}>
            <div className={`${s.post_img} ${randomClass}`}>
                {/*<SvgSelector svgName={"posts_photo"}/>*/}
            </div>
            </NavLink>
            <div className={s.post_info}>
                <div className={s.post_user_pic}>
                    <SvgSelector svgName={"user_avatar"}/>
                </div>
                <div>
                    <div className={s.post_title}>{props.title}</div>
                    <div>{props.blogTitle}</div>
                    <div className={s.post_date}>{props.createdAt}</div>
                </div>
            </div>
        </div>
    );
};

export const Post = React.memo(PostFC)