import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 0.6rem 0.8rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  &::placeholder {
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;
export default function InputBase({ type, onChange, placeholder, ...props }) {
  return (
    <div>
      <Input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: "",
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
