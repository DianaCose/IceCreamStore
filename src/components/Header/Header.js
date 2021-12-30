import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1,
    color: "#fff", }}>
      <AppBar position="static">
        <Toolbar sx={{diplay: "flex", justifyContent: "space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "white" }}
          >
            <HomeIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            sx={{ mr: 2, color: "white", ml: 2 }}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
