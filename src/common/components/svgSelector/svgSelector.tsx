import React from 'react';

type SvgSelectorPropsType = {
    svgName: "list" | "gallery" | 'photo' | 'list_purple'| 'gallery_purple'
}

export const SvgSelector = (props: SvgSelectorPropsType) => {
    switch (props.svgName) {
        case "list_purple": {
            return (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="#F8346B"/>
                </svg>
            )
        }
        case "list": {
            return (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="#1A1718"/>
                </svg>
            )
        }
        case "gallery": {
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z" fill="#1A1718"/>
                </svg>
            )
        }
        case "gallery_purple": {
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z" fill="#F8346B"/>
                </svg>
            )
        }
        case 'photo': {
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5 4.5H4.5C3 4.5 1.5 6 1.5 7.5V28.5C1.5 30.15 2.85 31.5 4.5 31.5H31.5C33 31.5 34.5 30 34.5 28.5V7.5C34.5 6 33 4.5 31.5 4.5ZM31.5 28.38C31.47 28.425 31.41 28.47 31.38 28.5H4.5V7.62L4.62 7.5H31.365C31.41 7.53 31.455 7.59 31.485 7.62V28.38H31.5ZM16.5 23.265L12.75 18.75L7.5 25.5H28.5L21.75 16.5L16.5 23.265Z" fill="#ADABAC"/>
                </svg>
            )
        }
        default:
            return <svg></svg>
    }
}


