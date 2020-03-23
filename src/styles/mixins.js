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
      padding-top: 9em;
      ${device.desktop`padding-top: 6em;`};
      ${device.tablet`padding-top: 3em;`};
      ${device.phone`padding-top: 2em;`};
    `,
    right: css`
      padding-right: 9em;
      ${device.desktop`padding-right: 6em;`};
      ${device.tablet`padding-right: 3em;`};
      ${device.phone`padding-right: 2em;`};
    `,
    bottom: css`
      padding-bottom: 9em;
      ${device.desktop`padding-bottom: 6em;`};
      ${device.tablet`padding-bottom: 3em;`};
      ${device.phone`padding-bottom: 2em;`};
    `,
    left: css`
      padding-left: 9em;
      ${device.desktop`padding-left: 6em;`};
      ${device.tablet`padding-left: 3em;`};
      ${device.phone`padding-left: 2em;`};
    `,
  },
}

export default mixins
