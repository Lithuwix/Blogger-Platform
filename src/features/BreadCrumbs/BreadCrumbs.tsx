import * as React from 'react';

import s from './BreadCrumbs.module.css'

import {NavLink} from "react-router-dom";

import {v1} from "uuid";

type BasicBreadcrumbsPropsType = {
    basePath: string,
    anotherWays?: anotherWayType[]
}

type anotherWayType = {way: string, path: string}

const Breadcrumbs = (props: BasicBreadcrumbsPropsType) => {

    const path = `/${props.basePath.toLowerCase()}`

    return (
        <div className={s.container}>
            <NavLink to={path}>
                <h2 className={s.title}>{props.basePath}</h2>
            </NavLink>
            {props.anotherWays &&
                props.anotherWays.map((el)=>
                    <NavLink to={`${path}/:${el.path}`} key={v1()}>
                        <div className={s.way_wrapper}>
                            <span className={s.separator}>‣ </span>
                            <span className={s.way}>{`${el.way}`}</span>
                        </div>
                    </NavLink>
                )
            }
        </div>
    );
}

export const BasicBreadcrumbs = React.memo(Breadcrumbs)