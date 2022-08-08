import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Dropdown = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  border: 0;
  padding: 12px 16px;
  appearance: none;
  width: min-content;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  ${NativeSelect}:focus +& {
    outline: 1px solid #212121;
    outline: 5px auto -web-kit-focus-ring-color;
  }
  ${NativeSelect}:hover+& {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Dropdown>
        {displayedValue}
        <Icon id="chevron-down" />
      </Dropdown>
    </Wrapper>
  );
};

export default Select;
