/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
`;
const Bar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
`;

const Container = styled.div`
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  position: relative;
  width: 100%;
  height: var(--height);
  padding: var(--padding);
`;
const getHeight = (size) => {
  if (size === "small") {
    return "8px";
  }
  if (size === "medium") {
    return "12px";
  }
  if (size === "large") {
    return "24px";
  }
  throw new Error(`Invalid size for progress bar: ${size}`);
};
const getPadding = (size) => {
  if (size === "large") return "4px";
  return "0";
};
const getStyle = (size) => ({
  "--height": getHeight(size),
  "--padding": getPadding(size),
});

const ProgressBar = ({ value, size }) => {
  return (
    <Container style={getStyle(size)} role="progressbar">
      <Bar>
        <Progress value={value} size={size} />
      </Bar>
      <VisuallyHidden>{value}% out of 100%</VisuallyHidden>
    </Container>
  );
};

export default ProgressBar;
