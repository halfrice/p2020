import { css } from "styled-components"
import device from "./device"
import theme from "./theme.yml"

const { color } = theme

const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    start: css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `,
    end: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `,
  },
  padding: {
    top: css`
      padding-top: 8rem;
      ${device.phone`padding-top: 6rem;`};
    `,
    bottom: css`
      padding-bottom: 8rem;
      ${device.phone`padding-bottom: 6rem;`};
    `,
    left: css`
      padding-left: 8rem;
      ${device.desktop`padding-left: 6rem;`};
      ${device.tablet`padding-left: 3rem;`};
      ${device.phone`padding-left: 1.5rem;`};
    `,
    right: css`
      padding-right: 8rem;
      ${device.desktop`padding-right: 6rem;`};
      ${device.tablet`padding-right: 3rem;`};
      ${device.phone`padding-right: 1.5rem;`};
    `,
  },
  button: css`
    cursor: pointer;
    background-color: transparent;
    border-radius: 3px;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    transition: none;
    &:hover,
    &:active {
      opacity: 0.5;
    }
  `,
  boxShadow: css`
    box-shadow: 0 0.625rem 2rem -1rem ${color.black};
    transition: ${theme.transition};
  `,
  shadow: css`
    box-shadow: 0 0.625rem 1rem -1rem ${color.black + "88"};
    transition: ${theme.transition};
  `,
}

export default mixins
