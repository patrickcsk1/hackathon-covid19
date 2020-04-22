import React, { Component } from "react";
import * as dataJSON from "./hospital_data.json";
import "../styles/styles.css";
import { Doughnut } from "react-chartjs-2";

const getColors3 = () => {
  var colors = ["#c144b5", "#7542c1", "#3947c1"];
  return colors;
};
const getColors4 = () => {
  var colors = ["#c144b5", "#7542c1", "#3947c1", "#4194c1"];
  return colors;
};
const getColors2 = () => {
  var colors = ["#c144b5", "#7542c1"];
  return colors;
};
const getTotal = () => {
  var total = 0;
  // console.log(dataJSON.datahospitales[1].hospitalizados[0].entidad);
  dataJSON.datahospitales[1].hospitalizados[0].entidad.data.forEach(
    (item) => (total += item.cant)
  );
  console.log(total);
  return total;
};
const getDataEntidad = () => {
  var labels = dataJSON.datahospitales[1].hospitalizados[0].entidad.data.map(
    (item) => item.name
  );
  var numbers = dataJSON.datahospitales[1].hospitalizados[0].entidad.data.map(
    (item) => item.cant
  );
  var obj = {
    labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: getColors3(),
        hoverBackgroundColor: getColors3(),
      },
    ],
  };
  return obj;
};
const getDataCondicion = () => {
  var labels = dataJSON.datahospitales[1].hospitalizados[1].condicion.data.map(
    (item) => item.name
  );
  var numbers = dataJSON.datahospitales[1].hospitalizados[1].condicion.data.map(
    (item) => item.cant
  );
  var obj = {
    labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: getColors4(),
        hoverBackgroundColor: getColors4(),
      },
    ],
  };
  return obj;
};
const getDataEvolucion = () => {
  var labels = dataJSON.datahospitales[1].hospitalizados[2].evolucion.data.map(
    (item) => item.name
  );
  var numbers = dataJSON.datahospitales[1].hospitalizados[2].evolucion.data.map(
    (item) => item.cant
  );
  var obj = {
    labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: getColors3(),
        hoverBackgroundColor: getColors3(),
      },
    ],
  };
  return obj;
};
const getDataEgreso = () => {
  var labels = dataJSON.datahospitales[1].hospitalizados[3].egreso.data.map(
    (item) => item.name
  );
  var numbers = dataJSON.datahospitales[1].hospitalizados[3].egreso.data.map(
    (item) => item.cant
  );
  var obj = {
    labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: getColors2(),
        hoverBackgroundColor: getColors2(),
      },
    ],
  };
  return obj;
};

export default class Infectahospitalizado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: getTotal(),
    };
  }

  render() {
    return (
      <div>
        <div className="text-color-white background-color-secundario d-flex justify-content-center align-items-center head-distrito">
          <h5 className="text-color-white">
            Infectados por COVID-19 hospitalizados{" "}
          </h5>
        </div>
        <div className="div-hospitalizados">
          <div className="row pt-3 text-color-white d-flex justify-content-center">
            <h5>Total de hospitalizados: {this.state.total}</h5>
          </div>
          <div className="row mt-5 mx-1">
            <div className="col">
              <Doughnut
                data={getDataEntidad}
                height="50vh"
                width="50vw"
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  legend: { display: false },
                }}
              />
              <h5 className="d-flex justify-content-center mt-2">Entidad</h5>
            </div>
            <div className="col">
              <Doughnut
                data={getDataCondicion}
                height="50vh"
                width="50vw"
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  legend: { display: false },
                }}
              />
              <h5 className="d-flex justify-content-center mt-2">Condicion</h5>
            </div>
          </div>
          <div className="row mt-5 mx-1">
            <div className="col">
              <Doughnut
                data={getDataEvolucion}
                height="50vh"
                width="50vw"
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  legend: { display: false },
                }}
              />
              <h5 className="d-flex justify-content-center mt-2">Evolucion</h5>
            </div>
            <div className="col">
              <Doughnut
                data={getDataEgreso}
                height="50vh"
                width="50vw"
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  legend: { display: false },
                }}
              />
              <h5 className="d-flex justify-content-center mt-2">Egreso</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
