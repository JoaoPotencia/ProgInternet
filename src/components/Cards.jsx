import React from 'react'

const Cards = () => {
    return (
        <div>
            <section class="service_section">
                <div class="container">
                    <h2 class="custom_heading wow fadeInUp " dara-wow-delay="0.1s">Temas TCC</h2>
                    <p class="custom_heading-text wow fadeInUp" dara-wow-delay="0.1s">
                        Alguns dos temas abordados no nosso site.
                    </p>
                    <div class="layout_padding3">
                        <div class="card-deck">
                            <div class="cardAlm card wow fadeInUp" data-wow-delay="0.1s">
                                <img class="card-img-top" src="src/assets/img/estrela.png" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 id='cardAlimentacao' class="card-title">Alimenteção Saudável</h5>
                                    <p class="card-text">
                                        Temos como prioridade conscientização das pessoas, sobre como ter uma alimenteção
                                        mais saudável, assim evitando doenças crônicas, e levando discernimento e informações confiáveis entre nossos leitores.
                                    </p>
                                </div>
                            </div>
                            <div class="card wow fadeInUp" data-wow-delay="0.1s">
                                <img class="card-img-top" src="src/assets/img/compartilhamento-de-arquivos.png
                            " alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Projeto Nutriação</h5>
                                    <p class="card-text">
                                        Parceria realizada com o projeto de extensão da Unioeste de Francisco Beltrão, sendo assim a divulgação do projeto em nosso site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cards;