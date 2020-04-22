import React, { Component } from "react";
import * as dataJSON from "./hospital_data.json";
import "../styles/styles.css";

const getOptions = () => {
  return dataJSON.datahospitales[2].hospitales_neumonia.data.map(
    (item) => item.name
  );
};

const getData = (filtro) => {
  if (filtro === "todos") {
    var dato = dataJSON.datahospitales[2].hospitales_neumonia.data;
    console.log("datos: ", dato);
    return dato;
  } else {
    var objFiltro = dataJSON.datahospitales[2].hospitales_neumonia.data.filter(
      (item) => item.name === filtro
    );
    console.log(objFiltro);
    return objFiltro;
  }
};

export default class Infectaneumonia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entidades: getOptions(),
      entidadSelected: "todos",
      datos: getData("todos"),
    };
  }

  handleSelect = (e) => {
    var data = getData(e.target.value);
    console.log("handle", data);
    this.setState({
      ...this.state,
      datos: data,
      entidadSelected: e.target.value,
    });
    console.log(this.state.datos.name);
  };

  subElements = (lista) => {
    const listElements = lista.map((item, i) => (
      <li className="text-color-white" key={i}>
        {item.name} - {item.cant}
      </li>
    ));
    return <ul>{listElements}</ul>;
  };

  todosEntidad = () => {
    console.log("todos", this.state.datos[0]);
    const listElements = this.state.datos.map((item, i) => (
      <li className="text-color-white mt-3" key={i}>
        {item.name}
        {this.subElements(item.casosxhospital)}
      </li>
    ));
    return <ul>{listElements}</ul>;
  };

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col text-color-white background-color-secundario d-flex justify-content-center">
            <h5>Seleccione Entidad: </h5>
          </div>
          <div className="col background-color-secundario">
            <select
              value={this.state.entidadSelected}
              onChange={this.handleSelect}
              className="custom-select"
              name="entidades"
              id="entidades"
            >
              <option value="todos">Todos</option>
              {this.state.entidades.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row div-neu py-3">{this.todosEntidad()}</div>
      </div>
    );
  }
}
