import React, { Component } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

export default class Informacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uidTienda: props.match.params.id,
      fecha: new Date(),
      tienda: null,
    };
  }

  getTienda = async () => {
    await firebase
      .firestore()
      .collection("tiendas")
      .doc(this.state.uidTienda)
      .get()
      .then((doc) => {
        // console.log(doc.id, doc.data());
        var obj = {
          id: doc.id,
          data: doc.data(),
        };
        this.setState({
          tienda: obj,
        });
      });
  };

  async componentDidMount() {
    await this.getTienda();
    console.log(this.state.tienda);
  }

  render() {
    if (!this.state.tienda) return null;
    else
      return (
        <div>
          <div className="row background-color-terciario pl-2 pt-2 head-distrito">
            <div className="col-1 text-color-white">
              <Link to="/main/supermercado">
                <i className="fas fa-angle-left text-color-white"></i>
              </Link>
            </div>
            <div className="col text-color-white">
              <h4>{this.state.tienda.data.nombre} </h4>
              <span>{this.state.tienda.data.direccion}</span>
            </div>
          </div>
          <div className="text-color-white background-color-secundario d-flex justify-content-center align-items-center">
            <p>
              Actualizado hasta {this.state.fecha.toLocaleString().toString()}
            </p>
          </div>
          <div className="background-color-cuarto">
            <h5>POR CONTINUAR</h5>
          </div>
        </div>
      );
  }
}
