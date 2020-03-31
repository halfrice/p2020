import { css } from "styled-components"
import device from "./device"

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
      padding-top: 9rem;
      ${device.phone`padding-top: 6rem;`};
    `,
    bottom: css`
      padding-bottom: 9rem;
      ${device.phone`padding-bottom: 6rem;`};
    `,
    left: css`
      padding-left: 9rem;
      ${device.desktop`padding-left: 6rem;`};
      ${device.tablet`padding-left: 3rem;`};
      ${device.phone`padding-left: 1.5rem;`};
    `,
    right: css`
      padding-right: 9rem;
      ${device.desktop`padding-right: 6rem;`};
      ${device.tablet`padding-right: 3rem;`};
      ${device.phone`padding-right: 1.5rem;`};
    `,
  },
}

export default mixins
