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
    <path d="M17,10C18.1,10 19,10.9 19,12C19,13.1 18.1,14 17,14C15.9,14 15,13.1 15,12C15,10.9 15.9,10 17,10M17,7C19.76,7 22,9.24 22,12C22,14.76 19.76,17 17,17H7C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7H17M7,9C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15H17C18.66,15 20,13.66 20,12C20,10.34 18.66,9 17,9H7Z" />
  </svg>
)
