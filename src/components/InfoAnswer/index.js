import styled from "styled-components";

const InfoAnswer = styled.div`
  position: absolute;
  width: 50%;
  max-height: 600px;
  top: 6.4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  p {
    padding: 1rem;
    font-size: 18px;
    text-align: justify;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 38%;
    right: 2rem;
    img {
      height: 150px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    right: 2rem;
    img {
      height: 330px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 50%;
    right: 6rem;
  }
`;

InfoAnswer.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  padding: 23px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 0px 0px;
  h3 {
    margin: 0;
  }
`;

export default InfoAnswer;
