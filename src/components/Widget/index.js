import styled from "styled-components";

const Widget = styled.div`
  margin-top: 6px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  span {
    color: ${({ theme }) => theme.colors.contrastText};
  }
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    padding: 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

Widget.Alternative = styled.a`
  display: block;
  padding: 10px 15px;
  margin-bottom: 8px;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  input {
    display: none;
  }
`;

export default Widget;
