import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light px-5">
                <button
                    className="navbar-toggler"
                    type="button"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <NavLink to="/"
                                activeStyle={{
                                    borderBottom: "3px solid white",
                                    paddingBottom: "10px",
                                }}
                                exact >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/createuser"
                                activeStyle={{
                                    borderBottom: "3px solid white",
                                    paddingBottom: "10px",
                                }}
                                exact>
                                Create New User
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/studentsList"
                                activeStyle={{
                                    borderBottom: "3px solid white",
                                    paddingBottom: "10px",
                                }}
                                exact>
                                Students List
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/feedback"
                                activeStyle={{
                                    borderBottom: "3px solid white",
                                    paddingBottom: "10px",
                                }}
                                exact>
                                Rate Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;