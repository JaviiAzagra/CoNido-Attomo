import React from "react";
import "./Instalations.scss";

const Instalations = () => {
  return (
    <div className="instalations">
      <h1>Instalaciones</h1>
      <div className="text">
        <p>La vida, como nueva.</p>
        <p>
          Exploración global sin complicaciones. Sólo tienes que aparecer y
          empezar a vivir tu mejor vida.
        </p>
      </div>
      <div className="instalations__info">
        <h4>Mira lo que te incluye</h4>
        <p>Check all the benefits</p>
      </div>

      <div className="container">
        <div className="container__card">
          <div className="container__card--img2">
            <img src="/assets/instalations/imagen2.svg" alt="imagen2" />
          </div>
          <div className="container__card--info">
            <h4>Registro sencillo</h4>
            <p>
              Un registro rápido y sin complicaciones. Encuentra la vivienda que
              te gusta, solicítala y regístrate con un clic.
            </p>
          </div>
        </div>

        <div className="container__card">
          <div className="container__card--img3">
            <img src="/assets/instalations/imagen3.svg" alt="imagen" />
          </div>
          <div className="container__card--info">
            <h4>Apartamentos amueblados</h4>
            <p>
              Todos nuestros apartamentos están completamente amueblados y
              listos para ser habitados. Trae tus cosas, nosotros nos encargamos
              del resto.
            </p>
          </div>
        </div>

        <div className="container__card1">
          <div className="container__card--img"></div>
          <div className="container__card--info">
            <h4>Todos los gastos incluidos</h4>
            <p>
              Sin sorpresas, todos los gastos están incluidos en el alquiler.
              Facturas, internet, manutención, lo que quieras.
            </p>
          </div>
        </div>

        <div className="container__card">
          <div className="container__card--img4">
            <img src="/assets/instalations/imagen4.svg" alt="imagen4" />
          </div>
          <div className="container__card--info">
            <h4>Eventos de la comunidad</h4>
            <p>
              Conferencias, clases de yoga, noches de bar y mucho más. Únete a
              nuestras reuniones comunitarias, todo corre de nuestra cuenta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalations;
