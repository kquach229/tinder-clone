import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import MessageIcon from "@material-ui/icons/Message";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.push(backButton)}>
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          alt="logo"
          className="header__logo"
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-512.png"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <MessageIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
