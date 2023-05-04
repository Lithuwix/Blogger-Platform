import React from 'react';

type SvgSelectorPropsType = {
    svgName: "user_avatar" | "posts_photo" | "list" | "gallery" | 'photo' | 'list_purple'| 'gallery_purple'| 'left_arrow'
}

export const SvgSelector = (props: SvgSelectorPropsType) => {
    switch (props.svgName) {
        case "user_avatar": {
            return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white"/>
                    <path d="M33 15H15C14 15 13 16 13 17V31C13 32.1 13.9 33 15 33H33C34 33 35 32 35 31V17C35 16 34 15 33 15ZM33 30.92C32.98 30.95 32.94 30.98 32.92 31H15V17.08L15.08 17H32.91C32.94 17.02 32.97 17.06 32.99 17.08V30.92H33ZM23 27.51L20.5 24.5L17 29H31L26.5 23L23 27.51Z" fill="#ADABAC"/>
                </svg>
            )
        }
        case "posts_photo": {
            return (
                <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5 0.5H3.5C2 0.5 0.5 2 0.5 3.5V24.5C0.5 26.15 1.85 27.5 3.5 27.5H30.5C32 27.5 33.5 26 33.5 24.5V3.5C33.5 2 32 0.5 30.5 0.5ZM30.5 24.38C30.47 24.425 30.41 24.47 30.38 24.5H3.5V3.62L3.62 3.5H30.365C30.41 3.53 30.455 3.59 30.485 3.62V24.38H30.5ZM15.5 19.265L11.75 14.75L6.5 21.5H27.5L20.75 12.5L15.5 19.265Z" fill="#ADABAC"/>
                </svg>
            )
        }
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
        case 'left_arrow': {
            return (
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9.66659L5.93999 8.72659L2.88666 5.66659H13.6667V4.33325H2.88666L5.94666 1.27325L5 0.333252L0.333328 4.99992L5 9.66659Z" fill="#1A1718"/>
                </svg>
            )
        }
        default:
            return <svg/>
    }
}


