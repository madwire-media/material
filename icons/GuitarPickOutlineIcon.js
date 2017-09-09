import React from 'react'

const DEFAULT_SIZE = 24

export const GuitarPickOutlineIcon = ({
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
    <path d="M19,4.1C18.1,3.3 17,2.8 15.8,2.5C15.5,2.4 13.6,2 12.2,2C12.2,2 12.1,2 12,2C12,2 11.9,2 11.8,2C10.4,2 8.4,2.4 8.1,2.5C7,2.8 5.9,3.3 5,4.1C3,5.9 3,8.7 4,11C5,13.5 6.1,15.7 7.6,17.9C8.8,19.6 10.1,22 12,22C13.9,22 15.2,19.6 16.5,17.9C18,15.8 19.1,13.5 20.1,11C21,8.7 21,5.9 19,4.1M18.2,10.2C17.1,12.9 16.1,14.9 14.8,16.7C14.6,16.9 14.5,17.2 14.3,17.4C13.8,18.2 12.6,20 12,20C12,20 12,20 12,20C11.3,20 10.2,18.3 9.6,17.4C9.4,17.2 9.3,16.9 9.1,16.7C7.9,14.9 6.8,12.9 5.7,10.2C5.5,9.5 4.7,7 6.3,5.5C6.8,5 7.6,4.7 8.6,4.4C9,4.4 10.7,4 11.8,4C11.8,4 12.1,4 12.1,4C13.2,4 14.9,4.3 15.3,4.4C16.3,4.7 17.1,5 17.6,5.5C19.3,7 18.5,9.5 18.2,10.2Z" />
  </svg>
)
