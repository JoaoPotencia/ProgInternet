import React from 'react'

const NavBar = () => {
    return (
        <div>
            <div className="hero_area sub_pages">

                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                            <a className="navbar-brand" href="index.html">
                                <img className="imgNav" src="src/assets/img/LOGO_NUTRIÇÃO.png" alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <a id="itensHome" className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="itensHome" className="nav-link" href="index.html"> alimentação saudável</a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="itensHome" className="nav-link" href="index.html"> projeto nutriação </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle itensHome" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                curiosidades
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a id="itensHome" className="dropdown-item" href="index.html">MITOS & VERDADES</a>
                                                <a id="itensHome" className="dropdown-item" href="index.html">dicas</a>
                                                <a id="itensHome" className="dropdown-item" href="index.html">sobre nós</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>

        </div>
    )
}

export default NavBar;