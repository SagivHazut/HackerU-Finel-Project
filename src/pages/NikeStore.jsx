import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
export const NikeStore = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav mr-auto">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/women"
              activeClassName="activeLink"
            >
              נשים
            </NavLink>
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/men"
              activeClassName="activeLink"
            >
              גברים
            </NavLink>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
