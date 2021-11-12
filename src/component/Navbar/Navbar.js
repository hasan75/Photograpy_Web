import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                     <button
                        class="navbar-toggler ms-auto navbar-dark bg-dark"
                        type="button "
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation "
                    >
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
                            <li class="nav-item ms-3 nav-list">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item ms-3 nav-list">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item ms-3 nav-list">
                                <a class="nav-link" href="#">Service & Package</a>
                            </li>
                            <li class="nav-item ms-3 nav-list">
                                <a class="nav-link" href="#">Gallery</a>
                            </li>
                            <li class="nav-item ms-3 nav-list">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item ms-3 nav-list">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;