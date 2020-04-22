import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between background-color-primario px-3">
        <a
          className="navbar-brand text-color-white text-title"
          href="/dashboard"
        >
          Thani
        </a>
        <form className="form-inline">
          <button
            className="btn btn-sm my-2 my-sm-0 resalta-coin"
            type="button"
          >
            <i className="fa fa-coins color-yellow">
              <span className="span-coin ml-2">10</span>
            </i>
          </button>
          <button className="btn my-2 my-sm-0" type="button">
            <i className="fa fa-user color-white" aria-hidden="true"></i>
          </button>
          <button className="btn my-2 my-sm-0" type="button">
            <i className="fa fa-cog color-white" aria-hidden="true"></i>
          </button>
        </form>
      </nav>
      <div className="row bg-light">
        <div className="col-4">
          <Link className="middle-nav" to="/main/">
            <i className="fa fa-home py-1" aria-hidden="true"></i>
            Inicio
          </Link>
        </div>
        <div className="col-4">
          <Link className="middle-nav" to="/main/mercado">
            <i className="fa fa-store-alt py-1" aria-hidden="true"></i>
            Mercados
          </Link>
        </div>
        <div className="col-4">
          <Link className="middle-nav" to="/main/hospital">
            <i className="fa fa-plus-square py-1" aria-hidden="true"></i>
            Hospitales
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
