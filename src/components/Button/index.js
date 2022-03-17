import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.25px;
  line-height: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5s;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

Button.Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "type", "button"]).isRequired,
};

export default Button;
