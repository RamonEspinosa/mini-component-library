import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const InputWrapper = styled.label`
  display: block;
  position: relative;
  width: ${(props) => (props.width ? props.width + "px" : "max-content")};
  font-size: var(--font-size);
`;
const Line = styled.div`
  border: var(--border-width) solid;
  border-radius: 5px;
  height: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const Input = styled.input`
  width: 100%;
  padding-left: var(--padding-left);
  border: 0;
  font-weight: 700;
  color: ${COLORS.gray500};
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  :hover {
    color: ${COLORS.black};
    ::placeholder {
      color: ${COLORS.black};
    }
  }
  outline-offset: var(--border-width);
`;
const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  color: ${COLORS.gray500};
  ${Input}:focus + & {
    color: ${COLORS.black};
  }
  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

const SIZES = {
  small: {
    fontSize: "14px",
    borderWidth: "0.5px",
    iconSize: "14",
    paddingLeft: "18px",
  },
  large: {
    fontSize: "18px",
    borderWidth: "1px",
    iconSize: "18",
    paddingLeft: "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <InputWrapper
      width={width}
      style={{
        "--font-size": SIZES[size].fontSize,
        "--border-width": SIZES[size].borderWidth,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>

      <Input
        style={{
          "--padding-left": SIZES[size].paddingLeft,
        }}
        placeholder={placeholder}
      />
      <InputIcon size={SIZES[size].iconSize} id={icon} />
      <Line />
    </InputWrapper>
  );
};

export default IconInput;
