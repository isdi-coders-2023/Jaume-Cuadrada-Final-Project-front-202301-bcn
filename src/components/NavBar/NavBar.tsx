import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled className="navbar">
      <button className="navbar-left">
        <img
          src="media/icons/Login_logo.png"
          alt="login logo"
          className="navbar-icons"
        />
        <span>Login</span>
      </button>
      <button className="navbar-right">
        <img
          src="media/icons/Register.png"
          alt="register logo"
          className="navbar-icons"
        />
        <span>Register</span>
      </button>
    </NavBarStyled>
  );
};

export default NavBar;
