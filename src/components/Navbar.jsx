import React from "react";
import "./Navbar.css"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            {/* <h1 className="logo">MZone</h1> */}
            <div className="nav-left">
                <Link to="/"><img src={logo} alt="" className="logo" /></Link>
                <ul className="menu">
                    <li><Link to="/">MovieZone</Link> </li>
                    <li> <Link className="btn btn-outline-light" to="/favorites">
                        ❤️ Favorites
                    </Link></li>

                </ul>
            </div>
            <div className="nav-right">
                <button type="button" className="btn btn-light">Sign up</button>
                <button type="button" className="btn btn-light">Log In</button>
                {/* <form className="form-inline my-2 my-lg-0 search">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 searbtn" type="submit">Search</button>
                </form> */}
            </div>
        </div>
    )
}