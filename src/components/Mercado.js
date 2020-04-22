import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default class Mercado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      distritos: [],
      distritoSelected: "",
    };
  }

  componentDidMount() {
    var auxDistritos = ["Callao", "Los Olivos", "Pueblo Libre", "San Miguel"];
    this.setState({ ...this.state, distritos: auxDistritos });
  }

  handleSelect = (e) => {
    this.setState({ ...this.state, distritoSelected: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col text-color-white background-color-secundario d-flex justify-content-center">
            <h5>Seleccione Distrito: </h5>
          </div>
          <div className="col background-color-secundario">
            <select
              value={this.state.distritoSelected}
              onChange={this.handleSelect}
              className="custom-select"
              name="distritos"
              id="distritos"
            >
              {this.state.distritos.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="btn-sections">
          <Link
            className="btn d-flex align-items-center mt-5 fondo-btn-mercado btn-mercado"
            type="button"
            to="/main/supermercado"
          >
            <img
              className="img-menu"
              src="https://pbs.twimg.com/profile_images/1191161069370134529/1JBpbBlb_400x400.png"
              alt="supermercado_im"
            />
            <h5 className="ml-2">Supermercados</h5>
          </Link>
          <Link
            className="btn d-flex align-items-center fondo-btn-mercado btn-mercado"
            type="button"
            to="/main/mercadoo"
          >
            <img
              className="img-menu"
              src="https://pbs.twimg.com/profile_images/1191161069370134529/1JBpbBlb_400x400.png"
              alt="mercado_im"
            />
            <h5 className="ml-2">Mercados</h5>
          </Link>
          <Link
            className="btn d-flex align-items-center fondo-btn-mercado btn-mercado"
            type="button"
            to="/main/bodega"
          >
            <img
              className="img-menu"
              src="https://pbs.twimg.com/profile_images/1191161069370134529/1JBpbBlb_400x400.png"
              alt="bodega_im"
            />
            <h5 className="ml-2">Bodega</h5>
          </Link>
        </div>
      </div>
    );
  }
}
