import React, { Component } from "react";
import * as dataJSON from "./hospital_data.json";
import { Doughnut } from "react-chartjs-2";
import "../styles/styles.css";

const getDataGraph = () => {
  var labels = dataJSON.datahospitales[0].casosxdistrito.data.map(
    (item) => item.name
  );
  var numbers = dataJSON.datahospitales[0].casosxdistrito.data.map(
    (item) => item.cant
  );

  var colors = [
    "#c144b5",
    "#7542c1",
    "#3947c1",
    "#4194c1",
    "#48c1b9",
    "#3dc16d",
    "#89c145",
    "#bcc135",
    "#c18838",
    "#c13e37",
    "#c191b9",
    "#9597c1",
    "#93bec1",
    "#8ec1a8",
    "#b9c182",
    "#c1998e",
    "#c1138a",
    "#6300c1",
    "#0000aa",
    "#009ab8",
    "#008a00",
    "#7f8900",
    "#895102",
    "#89000e",
  ];
  var obj = {
    labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };
  return obj;
};

export default class Infectadistrito extends Component {
  render() {
    return (
      <div>
        <div className="text-color-white background-color-secundario d-flex justify-content-center align-items-center head-distrito">
          <h5>Infectados por COVID-19 en cada distrito </h5>
        </div>
        <div className="d-flex justify-content-center align-items-center div-distrito">
          <Doughnut
            data={getDataGraph}
            height="245vh"
            options={{
              responsive: true,
              maintainAspectRatio: true,
              legend: { display: false },
            }}
          />
        </div>
      </div>
    );
  }
}
