import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const activeStyle = {
  color: "#FF00FF",
};
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, color: "#fff" }}>
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{ diplay: "flex", justifyContent: "space-between" }}
        >
          <NavLink to="/" activeStyle={activeStyle}>
            <IconButton size="large" edge="start" sx={{ ml: 5, color: "#fff" }}>
              <HomeIcon />
            </IconButton>
          </NavLink>
          <NavLink to="/cart" activeStyle={activeStyle}>
            <IconButton size="large" edge="end" sx={{ mr: 5, color: "#fff" }}>
              <ShoppingBasketIcon />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
