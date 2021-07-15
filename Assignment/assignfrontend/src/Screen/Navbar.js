import React, { Fragment, useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./all.css";
import { Logout } from "../Action/action";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = ({ Logout, users, history }) => {
  const [redirect, setRedirect] = useState(false);
  const logout_user = () => {
    Logout(history);
    setRedirect(true);
  };
  const guestLinks = () => (
    <Link id="nav" className="nav-link" to="/">
      Login
    </Link>
  );
  const authLinks = () => (
    <Fragment>
      <li id="cont">
        <Link id="nav" className="nav-link" to="/ContactUs">
          Contact Us
        </Link>
      </li>
      <li id="ana">
        <Link id="nav" className="nav-link" to="/Home">
          Analytics
        </Link>
      </li>

      <li id="logout">
        <Link id="nav" className="nav-link" onClick={() => logout_user()}>
          <ExitToAppIcon />
        </Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light bg-white mb-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link">
                AlgoScale<span className="sr-only"></span>
              </Link>
            </li>
            {users ? authLinks() : guestLinks()}
          </ul>
        </div>
      </nav>
      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  users: state.reducer.users,
});
export default connect(mapStateToProps, { Logout })(withRouter(Navbar));
