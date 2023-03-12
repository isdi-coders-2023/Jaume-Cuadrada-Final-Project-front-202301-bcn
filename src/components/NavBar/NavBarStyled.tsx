import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 428px;
  color: white;
  font-size: 16px;

  .navbar-bar {
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.seccondaryGrey};
  }

  .navbar-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    align-items: center;
    width: 50%;
    background-color: ${(props) => props.theme.colors.mainButton};
    color: white;
    text-align: center;
    font-size: 16px;
  }
  .navbar-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    align-items: center;
    width: 50%;
    background-color: ${(props) => props.theme.colors.background};
    color: white;
    text-align: center;
    font-size: 16px;
  }

  .navbar-icons {
    margin: 0px;
    width: 24px;
    height: 24px;
  }
`;

export default NavBarStyled;
