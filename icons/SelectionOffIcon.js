import React from 'react'

const DEFAULT_SIZE = 24

export const SelectionOffIcon = ({
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
    <path d="M0.5,3.77L1.78,2.5L21.5,22.22L20.23,23.5L18.73,22H17V20.27L3.73,7H2V5.27L0.5,3.77M4,2H7V4H5.82L3.83,2H4M22,4V7H20V4H17V2H20C21.1,2 22,2.9 22,4M20,17H22V20L22,20.17L20,18.18V17M2,20V17H4V20H7V22H4C2.9,22 2,21.1 2,20M10,2H14V4H10V2M10,20H14V22H10V20M20,10H22V14H20V10M2,10H4V14H2V10Z" />
  </svg>
)
