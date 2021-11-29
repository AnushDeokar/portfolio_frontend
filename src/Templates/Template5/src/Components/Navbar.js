import * as React from "react";
import { AppBar, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "@mui/icons-material";

export const Navbar = ({
  drawerWidthLeft,
  drawerWidthRight,
  mobileOpenRight,
  handleDrawerToggleLeft,
  handleDrawerToggleRight,
}) => {
  const rightIconStyle = {
    display: mobileOpenRight ? "none" : "block",
  };
  return (
    <AppBar
      position="relative"
      sx={{
        width: { md: `calc(100% - ${drawerWidthLeft + drawerWidthRight + 30}px)` },
        ml: { md: `${drawerWidthLeft + 15}px` },
        mr: { md: `${drawerWidthRight + 15}px` },
        display: { lg: "none" },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggleLeft}
          sx={{ mr: 0, display: { md: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div" style={{ flexGrow: 1 }}>
          Responsive drawer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggleRight}
          // style={rightIconStyle}
          sx={{ mr: 0, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
