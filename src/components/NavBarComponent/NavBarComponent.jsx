import { NavLink } from "react-router-dom";
import "./NavBarComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import nikelogo from "../../assets/nikelogo.png";
import { AddShoppingCart } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
const NavBarComponent = (props) => {
  const dispatch = useDispatch();

  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);

  let logout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid justify-content-center ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          {IsloggedInRedux === true ? (
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <IconButton
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
                className="cart"
              >
                <Badge badgeContent="" color="secondary">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/login"
                  activeClassName="activeLink"
                  onClick={logout}
                >
                  יציאה
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/login"
                  activeClassName="activeLink"
                >
                  כניסה
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/signup"
                  activeClassName="activeLink"
                >
                  הרשמה
                </NavLink>
              </li>
            </ul>
          )}
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav justify-content-end mb-2 mb-lg-0">
              <ul className="navbar-nav justify-content-end me-auto mb-2 mb-lg-0">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/CardsPanelPage"
                  activeClassName="activeLink"
                >
                  חנות
                </NavLink>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/aboutpage"
                    activeClassName="activeLink"
                  >
                    אודות
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/home"
                    activeClassName="activeLink"
                  >
                    Nike{" "}
                    <img
                      src={nikelogo}
                      alt="nikelogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
