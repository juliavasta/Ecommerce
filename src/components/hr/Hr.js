import { css } from "@emotion/css";

const hrCSS = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 25px;
  margin-bottom: 25px;
`;

function Hr() {
  return <div className={hrCSS}></div>;
}

export default Hr;
