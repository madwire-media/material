import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M4.4,22C3.07,22 2,20.93 2,19.6V12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22H4.4M14.9,4.4C12.3,4.4 10.2,6.5 10.2,9.1V11.6H8.3C7.69,11.6 7.2,12.09 7.2,12.7C7.2,13.31 7.69,13.8 8.3,13.8H9.8C10,13.8 10.2,14 10.2,14.2V16.3C10.2,17.68 9.08,18.8 7.7,18.8C7.55,18.8 7.41,18.79 7.27,18.76C7.19,18.74 7.1,18.73 7,18.73C6.41,18.73 5.91,19.23 5.91,19.83C5.91,20.37 6.3,20.81 6.8,20.91V20.91C7.09,20.97 7.39,21 7.7,21C10.3,21 12.4,18.9 12.4,16.3V13.8H14.3C14.91,13.8 15.4,13.31 15.4,12.7C15.4,12.09 14.91,11.6 14.3,11.6H12.8C12.58,11.6 12.4,11.42 12.4,11.2V9.1C12.4,7.72 13.52,6.6 14.9,6.6C15.05,6.6 15.2,6.61 15.34,6.64C15.42,6.66 15.5,6.67 15.59,6.67C16.19,6.67 16.69,6.17 16.69,5.57C16.69,5.03 16.3,4.58 15.8,4.5V4.5C15.5,4.43 15.21,4.4 14.9,4.4M6.8,12.7C6.8,12.58 6.81,12.46 6.84,12.34L6.31,11.81C6.1,11.87 5.89,11.95 5.7,12.05L6.91,13.26C6.84,13.08 6.8,12.9 6.8,12.7M6.54,18.5H6.47L6.5,18.5H6.54M5.61,19.83C5.61,19.6 5.67,19.38 5.77,19.19L3,16.42C3,16.76 3.05,17.08 3.13,17.4L5.61,19.88V19.83M5.86,20.63C5.77,20.5 5.71,20.37 5.67,20.22L3.24,17.79C3.67,19.07 4.63,20.1 5.86,20.63M15.8,12.7C15.8,12.82 15.79,12.94 15.76,13.06L16.29,13.59C16.5,13.53 16.71,13.45 16.9,13.35L15.69,12.14C15.76,12.32 15.8,12.5 15.8,12.7M16.06,6.88L16.13,6.92L16.08,6.88H16.06M17,5.57C17,5.8 16.93,6 16.83,6.21L19.6,9C19.59,8.64 19.55,8.32 19.47,8L17,5.5V5.57M16.74,4.77C16.83,4.9 16.89,5.03 16.93,5.18L19.36,7.61C18.93,6.33 17.97,5.3 16.74,4.77M16.07,13.65L15.69,13.27C15.61,13.46 15.5,13.63 15.35,13.78V13.78C15.6,13.76 15.84,13.71 16.07,13.65M18.23,12.42L16.67,10.86C16.53,11 16.37,11.13 16.2,11.24L17.78,12.82C17.94,12.69 18.09,12.56 18.23,12.42M17.62,12.94L16,11.34C15.82,11.44 15.61,11.5 15.39,11.55L17.09,13.26C17.27,13.16 17.45,13.05 17.62,12.94M18.75,11.8L17.15,10.2C17.05,10.39 16.94,10.56 16.81,10.71L18.37,12.27C18.5,12.12 18.63,11.97 18.75,11.8M19.16,11.09L17.39,9.32C17.37,9.56 17.32,9.79 17.23,10L18.86,11.63C18.97,11.46 19.07,11.28 19.16,11.09M19.6,9.26L16.72,6.38C16.6,6.55 16.45,6.69 16.28,6.79L19.5,10C19.56,9.77 19.59,9.5 19.6,9.26M19.46,10.25L17.08,7.87C17.27,8.22 17.39,8.62 17.4,9.04L19.25,10.89C19.33,10.68 19.4,10.47 19.46,10.25M4.82,12.58C4.66,12.71 4.5,12.84 4.37,13L5.93,14.54C6.07,14.4 6.23,14.27 6.4,14.16L4.82,12.58M5.5,12.14C5.33,12.24 5.15,12.35 5,12.46L6.58,14.06C6.78,13.96 7,13.89 7.21,13.85L5.5,12.14M7.25,11.62C7,11.64 6.76,11.69 6.53,11.75L6.91,12.13C7,11.94 7.11,11.77 7.25,11.62V11.62M3.09,15.38C3.04,15.63 3,15.88 3,16.14L5.88,19C6,18.85 6.15,18.71 6.32,18.61L3.09,15.38M3.74,13.77C3.63,13.94 3.53,14.12 3.44,14.31L5.21,16.08C5.23,15.84 5.28,15.61 5.37,15.4L3.74,13.77M3.35,14.5C3.27,14.72 3.2,14.93 3.14,15.15L5.5,17.53C5.33,17.18 5.21,16.78 5.2,16.36L3.35,14.5M4.23,13.13C4.1,13.28 3.97,13.43 3.85,13.6L5.45,15.2C5.55,15 5.66,14.84 5.79,14.69L4.23,13.13Z" />
  </svg>
)
