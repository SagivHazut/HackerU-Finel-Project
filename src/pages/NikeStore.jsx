import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CardsPanelPage from "./CardsPanelPage";
export const NikeStore = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid justify-content-center">
          <ul class="navbar-nav mr-auto">
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
