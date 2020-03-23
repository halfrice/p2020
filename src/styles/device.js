import { css } from "styled-components"

const sizes = {
  largeDesktop: 1439.98,
  desktop: 1199.98,
  tablet: 899.98,
  phone: 599.98,
  smallPhone: 399.98,
}

export const device = Object.keys(sizes).reduce((devices, name) => {
  const size = sizes[name] / 16
  devices[name] = (...args) => css`
    @media (max-width: ${size}em) {
      ${css(...args)};
    }
  `
  return devices
}, {})

export default device
