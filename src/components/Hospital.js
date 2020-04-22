import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

class Hospital extends Component {
  render() {
    return (
      <div>
        <div className="btn-sections">
          <Link
            className="btn d-flex align-items-center mt-5 fondo-btn-mercado btn-mercado"
            type="button"
            to="/main/distrito"
          >
            <img
              className="img-menu"
              src="https://previews.123rf.com/images/microone/microone1706/microone170600382/80953216-microorganismo-y-virus-de-la-infecci%C3%B3n-primitiva-bacterias-y-g%C3%A9rmenes-iconos-vectoriales-infecci%C3%B3n-por-virus.jpg"
              alt="infectado-distrito-im"
            />
            <h5 className="ml-2 text-color-white">
              Infectados por COVID-19 en cada distrito
            </h5>
          </Link>
          <Link
            className="btn d-flex align-items-center fondo-btn-mercado btn-mercado"
            type="button"
            to="/main/hospitalizado"
          >
            <img
              className="img-menu"
              src="https://previews.123rf.com/images/microone/microone1706/microone170600382/80953216-microorganismo-y-virus-de-la-infecci%C3%B3n-primitiva-bacterias-y-g%C3%A9rmenes-iconos-vectoriales-infecci%C3%B3n-por-virus.jpg"
              alt="infectado-hospitalizado-im"
            />
            <h5 className="ml-2 text-color-white">
              Infectados por COVID-19 hospitalizados
            </h5>
          </Link>
          <Link
            className="btn d-flex align-items-center fondo-btn-mercado btn-mercado"
            type="button"
            to="/main/neumonia"
          >
            <img
              className="img-menu"
              src="https://previews.123rf.com/images/microone/microone1706/microone170600382/80953216-microorganismo-y-virus-de-la-infecci%C3%B3n-primitiva-bacterias-y-g%C3%A9rmenes-iconos-vectoriales-infecci%C3%B3n-por-virus.jpg"
              alt="infectado-neumonia-im"
            />
            <h5 className="ml-2 text-color-white">
              Hospitales con casos de neumonia por COVID-19
            </h5>
          </Link>
        </div>
      </div>
    );
  }
}
export default Hospital;
