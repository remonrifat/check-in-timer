import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <LogoutIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          {props.text}
        </Typography>
        <Button
          variant="outlined"
          onClick={props.logOut}
          style={{ color: "#FFF" }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
