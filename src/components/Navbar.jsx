import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg  bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/general">News Monkey</NavLink>
                    <h1>Hello This is Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/business">Business</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/science">Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/technology">Technology</NavLink>
                                hello
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )

}

export default Navbar
