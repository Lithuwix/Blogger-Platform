import React from 'react';
import s from './Post.module.css'
import {SvgSelector} from "../../svgSelector/svgSelector";

type PostPropsType = {
    title: string
    shortDescription: string
    createdAt: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post_wrapper}>
            <div><SvgSelector svgName={"posts_photo"}/></div>
            <div className={s.post_info}>
                <div><SvgSelector svgName={"user_avatar"}/></div>
                <div>
                    <div>{props.title}</div>
                    <div>{props.shortDescription}</div>
                    <div>{props.createdAt}</div>
                </div>
            </div>
        </div>
    );
};

