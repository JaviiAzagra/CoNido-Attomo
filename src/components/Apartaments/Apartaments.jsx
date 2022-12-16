import React from "react";
import "./Apartaments.scss";

const Apartaments = () => {
  return (
    <div>
      <h1>Apartamentos</h1>
      <div className="search">
        <div className="search__inputs">
          <input type="search" placeholder="Madrid" />
          <input type="search" placeholder="Home Type" />
          <button className="clear-button">Clear All</button>
          <img src="/assets/apartments/search.svg" alt="search" />
        </div>

        <div className="search__switch">
          <label class="switchBtn">
            <input type="checkbox" />
            <div class="slide round"></div>
          </label>
          <p>Show map</p>
        </div>
      </div>

      <div className="apartments">
        <div className="apartments__card">
          <div className="apartments__card--img atocha">
            <img src="/assets/apartments/imagen.svg" alt="imagen" />
          </div>
          <div className="apartments__card--info">
            <div className="apartments__card--info--location">
              <p>Habitación privada -- Madrid, Centro </p>
              <img src="/assets/apartments/like.svg" alt="like" />
            </div>
            <h4>Calle Atocha 66 3º Izq</h4>
            <div className="apartments__card--info--more">
              <div className="apartments__card--info--more--beds">
                <img src="/assets/apartments/bed.svg" alt="bed" />
                <p>8 habs</p>
              </div>

              <div className="apartments__card--info--more--map">
                <img src="/assets/apartments/map.svg" alt="map" />
                <p>9 sqm.</p>
              </div>

              <div className="apartments__card--info--more--stairs">
                <img src="/assets/apartments/stairs.svg" alt="stairs" />
                <p>3er Piso</p>
              </div>
            </div>
            <div className="apartments__card--info--plus">
              <div className="apartments__card--info--plus--avaible">
                <p>Disponible desde</p>
                <span>2 Dic 2022</span>
                <p></p>
              </div>
              <div className="apartments__card--info--plus--price">
                <p>€ 600</p>
                <span>/mes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="apartments__card">
          <div className="apartments__card--img carranza">
            <img src="/assets/apartments/carranza.svg" alt="" />
          </div>
          <div className="apartments__card--info">
            <div className="apartments__card--info--location">
              <p>Habitación privada -- Madrid, Centro </p>
              <img src="/assets/apartments/like.svg" alt="like" />
            </div>
            <h4>Calle Carranza 10</h4>
            <div className="apartments__card--info--more">
              <div className="apartments__card--info--more--beds">
                <img src="/assets/apartments/bed.svg" alt="bed" />
                <p>5 habs</p>
              </div>

              <div className="apartments__card--info--more--map">
                <img src="/assets/apartments/map.svg" alt="map" />
                <p>11 sqm.</p>
              </div>

              <div className="apartments__card--info--more--stairs">
                <img src="/assets/apartments/stairs.svg" alt="stairs" />
                <p>4er Piso</p>
              </div>
            </div>
            <div className="apartments__card--info--plus">
              <div className="apartments__card--info--plus--avaible">
                <p>Disponible desde</p>
                <span>2 Dic 2022</span>
                <p></p>
              </div>
              <div className="apartments__card--info--plus--price">
                <p>€ 750</p>
                <span>/mes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="apartments__card">
          <div className="apartments__card--img cedaceros">
            <img src="/assets/apartments/cedaceros.svg" alt="" />
          </div>
          <div className="apartments__card--info">
            <div className="apartments__card--info--location">
              <p>Habitación privada -- Madrid, Centro </p>
              <img src="/assets/apartments/like.svg" alt="like" />
            </div>
            <h4>Calle Cedaceros 8 1º</h4>
            <div className="apartments__card--info--more">
              <div className="apartments__card--info--more--beds">
                <img src="/assets/apartments/bed.svg" alt="bed" />
                <p>8 habs</p>
              </div>

              <div className="apartments__card--info--more--map">
                <img src="/assets/apartments/map.svg" alt="map" />
                <p>9 sqm.</p>
              </div>

              <div className="apartments__card--info--more--stairs">
                <img src="/assets/apartments/stairs.svg" alt="stairs" />
                <p>3er Piso</p>
              </div>
            </div>
            <div className="apartments__card--info--plus">
              <div className="apartments__card--info--plus--avaible">
                <p>Disponible desde</p>
                <span>2 Dic 2022</span>
                <p></p>
              </div>
              <div className="apartments__card--info--plus--price">
                <p>€ 600</p>
                <span>/mes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="apartments__card">
          <div className="apartments__card--img costanilla">
            <img src="/assets/apartments/costanilla.svg" alt="" />
          </div>
          <div className="apartments__card--info">
            <div>
              <div className="apartments__card--info--location">
                <p>Habitación privada -- Madrid, Centro </p>
                <img src="/assets/apartments/like.svg" alt="like" />
              </div>
              <div className="street">
                <h4>Calle Costanilla de</h4>
                <h4>Santiago 2 1º Der</h4>
              </div>
            </div>
            <div className="apartments__card--info--more">
              <div className="apartments__card--info--more--beds">
                <img src="/assets/apartments/bed.svg" alt="bed" />
                <p>5 habs</p>
              </div>

              <div className="apartments__card--info--more--map">
                <img src="/assets/apartments/map.svg" alt="map" />
                <p>11 sqm.</p>
              </div>

              <div className="apartments__card--info--more--stairs">
                <img src="/assets/apartments/stairs.svg" alt="stairs" />
                <p>4er Piso</p>
              </div>
            </div>
            <div className="apartments__card--info--plus">
              <div className="apartments__card--info--plus--avaible">
                <p>Disponible desde</p>
                <span>2 Dic 2022</span>
                <p></p>
              </div>
              <div className="apartments__card--info--plus--price">
                <p>€ 750</p>
                <span>/mes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="apartments__card">
          <div className="apartments__card--img colegiata">
            <img src="/assets/apartments/colegiata.svg" alt="" />
          </div>
          <div className="apartments__card--info">
            <div className="apartments__card--info--location">
              <p>Habitación privada -- Madrid, Centro </p>
              <img src="/assets/apartments/like.svg" alt="like" />
            </div>
            <h4>Calle Colegiata 13 1º Der</h4>
            <div className="apartments__card--info--more">
              <div className="apartments__card--info--more--beds">
                <img src="/assets/apartments/bed.svg" alt="bed" />
                <p>8 habs</p>
              </div>

              <div className="apartments__card--info--more--map">
                <img src="/assets/apartments/map.svg" alt="map" />
                <p>9 sqm.</p>
              </div>

              <div className="apartments__card--info--more--stairs">
                <img src="/assets/apartments/stairs.svg" alt="stairs" />
                <p>3er Piso</p>
              </div>
            </div>
            <div className="apartments__card--info--plus">
              <div className="apartments__card--info--plus--avaible">
                <p>Disponible desde</p>
                <span>2 Dic 2022</span>
                <p></p>
              </div>
              <div className="apartments__card--info--plus--price">
                <p>€ 600</p>
                <span>/mes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="apartments__card">
          <div className="apartments__card--img quijote">
            <img src="/assets/apartments/quijote.svg" alt="" />
          </div>
          <div className="apartments__card--info">
            <div className="apartments__card--info--location">
              <p>Habitación privada -- Madrid, Centro </p>
              <img src="/assets/apartments/like.svg" alt="like" />
            </div>
            <h4>Calle de Don Quijote 22</h4>
            <div className="apartments__card--info--more">
              <div className="apartments__card--info--more--beds">
                <img src="/assets/apartments/bed.svg" alt="bed" />
                <p>5 habs</p>
              </div>

              <div className="apartments__card--info--more--map">
                <img src="/assets/apartments/map.svg" alt="map" />
                <p>11 sqm.</p>
              </div>

              <div className="apartments__card--info--more--stairs">
                <img src="/assets/apartments/stairs.svg" alt="stairs" />
                <p>4er Piso</p>
              </div>
            </div>
            <div className="apartments__card--info--plus">
              <div className="apartments__card--info--plus--avaible">
                <p>Disponible desde</p>
                <span>2 Dic 2022</span>
                <p></p>
              </div>
              <div className="apartments__card--info--plus--price">
                <p>€ 750</p>
                <span>/mes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="more-button">Ver mas</button>
    </div>
  );
};

export default Apartaments;
