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
    <path d="M7,11H1V13H7V11M9.17,7.76L7.05,5.64L5.64,7.05L7.76,9.17L9.17,7.76M13,1H11V7H13V1M18.36,7.05L16.95,5.64L14.83,7.76L16.24,9.17L18.36,7.05M17,11V13H23V11H17M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M14.83,16.24L16.95,18.36L18.36,16.95L16.24,14.83L14.83,16.24M5.64,16.95L7.05,18.36L9.17,16.24L7.76,14.83L5.64,16.95M11,23H13V17H11V23Z" />
  </svg>
)
