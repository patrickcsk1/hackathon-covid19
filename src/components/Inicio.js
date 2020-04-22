import React, { Component } from "react";
import "../styles/styles.css";
import mapaInicial from "../img/map_inicio.jpeg";

export default class Inicio extends Component {
  render() {
    return (
      <div>
        <div className="text-color-white background-color-secundario d-flex justify-content-center">
          <h4>Zonas de riesgo</h4>
        </div>
        <div className="d-flex justify-content-center">
          <img className="img_inicio" src={mapaInicial} alt="Logo"></img>
        </div>
      </div>
    );
  }
}
