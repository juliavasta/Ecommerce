import { css } from "@emotion/css";

function Title({ title }) {
  return (
    <h3
      className={css`
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        padding: 30px 0;
      `}
    >
      {title}
    </h3>
  );
}

export default Title;
