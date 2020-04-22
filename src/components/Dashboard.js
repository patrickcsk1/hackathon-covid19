import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Mercado from "./Mercado";
import Hospital from "./Hospital";
import Infectadistrito from "./Infectadistrito";
import Infectahospitalizado from "./Infectahospitalizado";
import Infectaneumonia from "./Infectaneumonia";
import Bodega from "./Bodega";
import Mercadoo from "./Mercadoo";
import Supermercado from "./Supermercado";
import Informacion from "./Informacion";
import Ultima from "./Ultima";

const Waiting = () => {
  return (
    <div className="container" style={{ marginTop: "30%" }}>
      <h1 style={{ color: "white", display: "block" }}>Cargando</h1>
      <div className="spinner-border text-light" role="status"></div>
    </div>
  );
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // userLog: localStorage.getItem("username"),
    };
  }

  componentDidMount() {
    // console.log("dash ");
    // if (!this.state.userLog) this.props.history.push("/");
  }

  render() {
    // if (this.state.userLog === null) return <Waiting />;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/main">
            <Inicio />
          </Route>
          <Route path="/main/mercado">
            <Mercado />
          </Route>
          <Route path="/main/hospital">
            <Hospital />
          </Route>
          <Route path="/main/supermercado" component={Supermercado}></Route>
          <Route path="/main/vista/:id" component={Informacion}></Route>
          <Route path="/main/ultima/:id" component={Ultima}></Route>
          <Route path="/main/mercadoo" component={Mercadoo}></Route>
          <Route path="/main/bodega" component={Bodega}></Route>
          <Route path="/main/distrito" component={Infectadistrito}></Route>
          <Route
            path="/main/hospitalizado"
            component={Infectahospitalizado}
          ></Route>
          <Route path="/main/neumonia" component={Infectaneumonia}></Route>
        </Switch>
      </div>
    );
  }
}
