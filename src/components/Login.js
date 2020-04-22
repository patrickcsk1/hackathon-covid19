import React, { Component } from "react";
import "../styles/styles.css";
import login from "../img/logo.jpeg";
import swal from "sweetalert2";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleStates = (e) => {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
  };

  onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      this.handleSignIn();
    }
  };

  handleSignIn = () => {
    // console.log(this.state);
    // if (this.state.username === "admin" && this.state.password === "Admin123") {
    //   swal.fire({
    //     title: "Aviso",
    //     text: "Logueo correcto",
    //     icon: "success",
    //   });
    // localStorage.setItem("username", this.state.username);
    this.props.history.push("/main");
    // } else {
    //   swal.fire({
    //     title: "Error",
    //     text: "Usuario y/o Contraseña incorrecta",
    //     icon: "error",
    //   });
    //   this.setState({ username: "", password: "" });
    // }
  };

  render() {
    return (
      <div className="login-div d-flex justify-content-center background-color-primario mx-auto">
        <form className="login-form">
          <div className="d-flex justify-content-center my-4">
            <img className="img-login" src={login} alt="login"></img>
          </div>
          <div className="d-flex justify-content-center my-4">
            <h1 className="text-color-white login-title">THANI</h1>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              required
              className="form-control input-login"
              id="email"
              placeholder="Ingrese su correo*"
              value={this.state.username}
              onChange={this.handleStates}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control input-login"
              id="password"
              placeholder="Ingrese su contraseña*"
              value={this.state.password}
              onChange={this.handleStates}
              onKeyDown={this.onKeyDown}
            />
          </div>
          <div className="form-group mt-5">
            <button
              type="button"
              className="btn btn-login mt-2 text-color-white"
              onClick={this.handleSignIn}
            >
              Sign in
            </button>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-login text-color-white">
              <i className="fab fa-facebook-square mr-3"></i> Sign in with
              Facebook
            </button>
          </div>
        </form>
      </div>
    );
  }
}
