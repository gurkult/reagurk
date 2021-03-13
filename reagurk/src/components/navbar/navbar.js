import React from "react";
import "./navbar.css";
import banner from "./gurkult.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="nav-brand"
          href="https://discord.gg/JG9XyevN"
          target="_blank2"
        >
          <img src={banner} alt="website banner"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="##"
                target="blank1"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##" target="blank2">
                Gurkboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##" target="blank3">
                Gurkmages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##" target="blank3">
                FAQ
              </a>
            </li>
          </ul>
          <div className={classes.root}>
            <Button variant="contained" color="primary">
              Login
            </Button>
            <Button variant="contained" color="secondary">
              JoinUs
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
