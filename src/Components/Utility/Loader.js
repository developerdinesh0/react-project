import React from "react";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

const Loader = props => {
  const override = css`
    position: absolute;
    display: block;
    margin: 0 auto;
    border-color: red;
    top: 100px;
  `;
  return <BounceLoader css={override} loading={true} />;
};

export default Loader;
