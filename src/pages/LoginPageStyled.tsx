import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  h1 {
    color: white;
  }

  img {
    margin-top: 50px;
    height: 158px;
    width: 184px;
  }

  .image-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("media/photos/login.jpeg");
    background-size: cover;
    background-position: 65% center;
    opacity: 0.1;
    z-index: -999;
  }
`;

export default LoginPageStyled;
