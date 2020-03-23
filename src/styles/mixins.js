import { css } from "styled-components"

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
}

export default mixins
