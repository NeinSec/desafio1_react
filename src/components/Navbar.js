import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">BurgerBox <i class="bi bi-box"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                                                
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hamburguesas
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Box cuarto de libra</a></li>
                            <li><a className="dropdown-item" href="#">Box big mac copycat</a></li>
                            <li><a className="dropdown-item" href="#">Box bacon cheese</a></li>
                            <li><a className="dropdown-item" href="#">Box bacon cheese</a></li>
                            <li><a className="dropdown-item" href="#">Box onion bacon</a></li>
                            <li><a className="dropdown-item" href="#">Box classic</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#"><i class="bi bi-cart2"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar; 