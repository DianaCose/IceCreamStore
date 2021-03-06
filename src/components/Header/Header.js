import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";
import Cart from "../Cart/Cart";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, color: "#fff", height: "60px" }}>
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{ diplay: "flex", justifyContent: "space-between" }}
        >
          <NavLink to="/">
            <IconButton size="large" edge="start" sx={{ ml: 5, color: "#fff" }}>
              <HomeIcon />
            </IconButton>
          </NavLink>
          <IconButton
            size="large"
            edge="end"
            sx={{ mr: 5, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <ShoppingBasketIcon />
          </IconButton>
          { open && <Cart 
          onClose={() => setOpen(false)}
          />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
