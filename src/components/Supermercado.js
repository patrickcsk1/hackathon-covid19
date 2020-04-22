import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

export default class Supermercado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiendas: [],
    };
  }

  async componentDidMount() {
    await firebase
      .firestore()
      .collection("tiendas")
      .get()
      .then((snapshots) => {
        if (!snapshots.empty) {
          snapshots.forEach((doc) => {
            var obj = {
              id: doc.id,
              data: doc.data(),
            };
            console.log(obj);
            this.setState({
              tiendas: [...this.state.tiendas, obj],
            });
          });
        }
      });
  }

  tiendaBucle = () => {
    const aux = this.state.tiendas.map((tienda, i) => {
      const path = "/main/vista/" + tienda.id;
      return (
        <Link
          key={i}
          className="btn mx-5 align-items-center fondo-btn-mercado btn-mercado"
          type="button"
          to={path}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img className="img-menu" src={tienda.data.img_url} alt="im" />
            </div>
            <div>
              <h5 className="ml-2 text-color-white">{tienda.data.nombre}</h5>
              <h5 className="ml-2 text-color-white">{tienda.data.direccion}</h5>
            </div>
          </div>
        </Link>
      );
    });
    return <div className="btn-sections pt-5">{aux}</div>;
  };

  render() {
    if (this.state.tiendas === null) return null;
    else
      return (
        <div>
          <div className="text-color-white background-color-secundario d-flex justify-content-center align-items-center head-distrito">
            <h5>SUPERMERCADOS </h5>
          </div>
          <div>
            {/* <div className="btn-sections"> */}
            {this.tiendaBucle()}
            {/* <button
                className="btn d-flex align-items-center mt-5 fondo-btn-mercado btn-mercado"
                type="button"
              >
                <img
                  className="img-menu"
                  src="https://previews.123rf.com/images/microone/microone1706/microone170600382/80953216-microorganismo-y-virus-de-la-infecci%C3%B3n-primitiva-bacterias-y-g%C3%A9rmenes-iconos-vectoriales-infecci%C3%B3n-por-virus.jpg"
                  alt="infectado-distrito-im"
                />
                <h5 className="ml-2 text-color-white">
                  Infectados por COVID-19 en cada distrito
                </h5>
              </button>
              <button
                className="btn d-flex align-items-center fondo-btn-mercado btn-mercado"
                type="button"
              >
                <img
                  className="img-menu"
                  src="https://previews.123rf.com/images/microone/microone1706/microone170600382/80953216-microorganismo-y-virus-de-la-infecci%C3%B3n-primitiva-bacterias-y-g%C3%A9rmenes-iconos-vectoriales-infecci%C3%B3n-por-virus.jpg"
                  alt="infectado-hospitalizado-im"
                />
                <h5 className="ml-2 text-color-white">
                  Infectados por COVID-19 hospitalizados
                </h5>
              </button>
              <button
                className="btn d-flex align-items-center fondo-btn-mercado btn-mercado"
                type="button"
              >
                <img
                  className="img-menu"
                  src="https://previews.123rf.com/images/microone/microone1706/microone170600382/80953216-microorganismo-y-virus-de-la-infecci%C3%B3n-primitiva-bacterias-y-g%C3%A9rmenes-iconos-vectoriales-infecci%C3%B3n-por-virus.jpg"
                  alt="infectado-neumonia-im"
                />
                <h5 className="ml-2 text-color-white">
                  Hospitales con casos de neumonia por COVID-19
                </h5>
              </button> */}
            {/* </div> */}
          </div>
        </div>
      );
  }
}
