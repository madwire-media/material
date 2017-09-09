import React from 'react'

const DEFAULT_SIZE = 24

export const BoneIcon = ({
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
    <path d="M8,14C8,15.66 6.66,17 5,17C3.34,17 2,15.66 2,14C2,13.23 2.29,12.53 2.76,12C2.29,11.47 2,10.77 2,10C2,8.34 3.34,7 5,7C6.66,7 8,8.34 8,10C9.33,10.08 10.67,10.17 12,10.17C13.33,10.17 14.67,10.08 16,10C16,8.34 17.34,7 19,7C20.66,7 22,8.34 22,10C22,10.77 21.71,11.47 21.24,12C21.71,12.53 22,13.23 22,14C22,15.66 20.66,17 19,17C17.34,17 16,15.66 16,14C14.67,13.92 13.33,13.83 12,13.83C10.67,13.83 9.33,13.92 8,14Z" />
  </svg>
)
