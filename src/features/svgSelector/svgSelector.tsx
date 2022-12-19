import React from 'react';

type SvgSelectorPropsType = {
    svgName: "user_avatar" | "posts_photo" | "list" | "gallery" | 'photo' | 'list_purple'| 'gallery_purple'
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
                <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="180" rx="2" fill="white"/>
                    <path d="M163.5 76.5H136.5C135 76.5 133.5 78 133.5 79.5V100.5C133.5 102.15 134.85 103.5 136.5 103.5H163.5C165 103.5 166.5 102 166.5 100.5V79.5C166.5 78 165 76.5 163.5 76.5ZM163.5 100.38C163.47 100.425 163.41 100.47 163.38 100.5H136.5V79.62L136.62 79.5H163.365C163.41 79.53 163.455 79.59 163.485 79.62V100.38H163.5ZM148.5 95.265L144.75 90.75L139.5 97.5H160.5L153.75 88.5L148.5 95.265Z" fill="#ADABAC"/>
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
        default:
            return <svg/>
    }
}


