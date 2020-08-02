import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
        <Link to="/" className="navbar-brand text-light font-weight-bold">FRONTEND</Link>
           
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
                            <button
                                className="nav-link dropdown-toggle btn btn-block btn-success btnUsers"
                                data-toggle="dropdown"
                            >
                                Users
                            </button>
                            <div className="dropdown-menu" arial-labelledby="navegacion">
                                <Link to="/" className="dropdown-item">List Users</Link>
                                <Link to="/user/create" className="dropdown-item">Create Users</Link>
                            </div>
                       
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;