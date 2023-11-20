import React from 'react'

const Header = () => {
    return (
        <div>
             <section class=" slider_section position-relative">
      <div id="carouselExampleControls" class="carousel slide position-relative" data-ride="carousel"
        data-bs-interval="">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1 id="ani" onclick="mudarAnimacao()" class="animated slideInRight">
                            Conheça o <br/>Projeto NUTRIAÇÃO
                          </h1>
                          <p id="ani" class="animated slideInRight">
                            Clique no botão abaixo e conheça mais sobre o projeto nutriação
                            da Unioeste de Francisco Beltrão.
                          </p>
                          <div id="ani" class="d-flex">
                            <a id="aniBtn" href="service.html"
                              class="text-uppercase custom_dark-btn animated slideInRight">
                              SAIBA MAIS
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src="src/assets/img/Logo_Projeto_Nutri_Ação.png" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1 id="ani" class="animated slideInRight">
                            10 Passos, Alimentação <br/>
                            Saudável
                          </h1>
                          <p id="ani">
                            Saiba como ter uma alimentação mais saudável, clicando no botão saiba mais.
                          </p>
                          <div id="ani" class="d-flex">
                            <a id="aniBtn" href="fruit.html" class="text-uppercase custom_dark-btn">
                              Saiba Mais
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src="src/assets/img/slide-img.png" alt="" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div id="buttons">
          <div id="button_carousel" class="custom_carousel-control">
            <a class="carousel-control-prev" id="previous" onclick="mudarAnimacao(event)"
              href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" id="next" onclick="mudarAnimacao(event)" href="#carouselExampleControls"
              role="button" data-slide="next">
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default Header;