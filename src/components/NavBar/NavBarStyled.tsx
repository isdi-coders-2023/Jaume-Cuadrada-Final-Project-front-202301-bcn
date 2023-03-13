import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;
  color: white;
  font-size: 16px;
  border-top: 2px solid ${(props) => props.theme.colors.seccondaryGrey};

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

  .navbar-icon-left {
    margin: 0px;
    width: 24px;
    height: 24px;
  }
  .navbar-icon-right {
    margin: 0px;
    width: 20.16px;
    height: 24px;
  }
`;

export default NavBarStyled;
