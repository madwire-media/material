import React from 'react'

const DEFAULT_SIZE = 24

export const BasecampIcon = ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M3.39,15.64C3.4,15.55 3.42,15.45 3.45,15.36C3.5,15.18 3.54,15 3.6,14.84C3.82,14.19 4.16,13.58 4.5,13C4.7,12.7 4.89,12.41 5.07,12.12C5.26,11.83 5.45,11.54 5.67,11.26C6,10.81 6.45,10.33 7,10.15C7.79,9.9 8.37,10.71 8.82,11.22C9.08,11.5 9.36,11.8 9.71,11.97C9.88,12.04 10.06,12.08 10.24,12.07C10.5,12.05 10.73,11.87 10.93,11.71C11.46,11.27 11.9,10.7 12.31,10.15C12.77,9.55 13.21,8.93 13.73,8.38C13.95,8.15 14.18,7.85 14.5,7.75C14.62,7.71 14.77,7.72 14.91,7.78C15,7.82 15.05,7.87 15.1,7.92C15.17,8 15.25,8.04 15.32,8.09C15.88,8.5 16.4,9 16.89,9.5C17.31,9.93 17.72,10.39 18.1,10.86C18.5,11.32 18.84,11.79 19.15,12.3C19.53,12.93 19.85,13.58 20.21,14.21C20.53,14.79 20.86,15.46 20.53,16.12C20.5,16.15 20.5,16.19 20.5,16.22C19.91,17.19 18.88,17.79 17.86,18.18C16.63,18.65 15.32,18.88 14,18.97C12.66,19.07 11.3,19.06 9.95,18.94C8.73,18.82 7.5,18.6 6.36,18.16C5.4,17.79 4.5,17.25 3.84,16.43C3.69,16.23 3.56,16.03 3.45,15.81C3.43,15.79 3.42,15.76 3.41,15.74C3.39,15.7 3.38,15.68 3.39,15.64M2.08,16.5C2.22,16.73 2.38,16.93 2.54,17.12C2.86,17.5 3.23,17.85 3.62,18.16C4.46,18.81 5.43,19.28 6.44,19.61C7.6,20 8.82,20.19 10.04,20.29C11.45,20.41 12.89,20.41 14.3,20.26C15.6,20.12 16.91,19.85 18.13,19.37C19.21,18.94 20.21,18.32 21.08,17.54C21.31,17.34 21.53,17.13 21.7,16.88C21.86,16.67 22,16.44 22,16.18C22,15.88 22,15.57 21.92,15.27C21.85,14.94 21.76,14.62 21.68,14.3C21.65,14.18 21.62,14.06 21.59,13.94C21.27,12.53 20.78,11.16 20.12,9.87C19.56,8.79 18.87,7.76 18.06,6.84C17.31,6 16.43,5.22 15.43,4.68C14.9,4.38 14.33,4.15 13.75,4C13.44,3.88 13.12,3.81 12.8,3.74C12.71,3.73 12.63,3.71 12.55,3.71C12.44,3.71 12.33,3.71 12.23,3.71C12,3.71 11.82,3.71 11.61,3.71C11.5,3.71 11.43,3.7 11.33,3.71C11.25,3.72 11.16,3.74 11.08,3.75C10.91,3.78 10.75,3.81 10.59,3.85C10.27,3.92 9.96,4 9.65,4.14C9.04,4.38 8.47,4.7 7.93,5.08C6.87,5.8 5.95,6.73 5.18,7.75C4.37,8.83 3.71,10.04 3.21,11.3C2.67,12.64 2.3,14.04 2.07,15.47C2.04,15.65 2,15.84 2,16C2,16.12 2,16.22 2,16.32C2,16.37 2,16.4 2.03,16.44C2.04,16.46 2.06,16.5 2.08,16.5Z" />
  </svg>
)
