import React from 'react'

const Rodape = () => {
    return (
        <div>
            <footer>
                <ul className="links">
                    <li> <a href="index.html">Home</a></li>
                    <li> <a href="index.html">Alimentação Saudável</a></li>
                    <li> <a href="index.html">Projeto Nutriação</a></li>
                    <li> <a href="index.html">Mitos & Verdades</a></li>
                    <li> <a href="index.html">Dicas </a></li>
                    <li> <a href="index.html">Sobre Nós</a></li>
                </ul>
                <div className="line">
                </div>
                <div className="medias-socias">
                    <div>
                        <i id="git" className="fa-brands fa-github"></i>
                        <i id="insta" className="fa-brands fa-instagram"></i>
                        <i id="in" className="fa-brands fa-linkedin"></i>
                        <i id="tt" className="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <p className="text-center copyright"> João VItor &copy; 2023</p>
            </footer>
        </div>
    );
}

export default Rodape;