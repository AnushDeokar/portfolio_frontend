import * as React from "react";
import { Navbar } from "./Navbar";
import RightDrawer from "./rightDrawer";
import LeftDrawer from "./leftDrawer";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
// import { CentralColoumn } from "./centralColoumn";
import { Footer } from "./Footer/Footer";

function Layout({ children, drawerWidthLeft, drawerWidthRight }) {
  const [mobileOpenLeft, setMobileOpenLeft] = React.useState(false);
  const [mobileOpenRight, setMobileOpenRight] = React.useState(false);

  const handleDrawerToggleLeft = () => {
    setMobileOpenLeft(!mobileOpenLeft);
  };

  const handleDrawerToggleRight = () => {
    setMobileOpenRight(!mobileOpenRight);
  };

  var DWLForCentralDiv = drawerWidthLeft;
  var DWRForCentralDiv = drawerWidthRight;

  if (window.innerWidth <= 900) {
    DWLForCentralDiv = 0;
  }
  if (window.innerWidth <= 580) {
    DWRForCentralDiv = 0;
  }

  return (
    <div style={{backgroundColor: "rgb(240, 240, 246)"}}>
      <Navbar
        drawerWidthLeft={drawerWidthLeft}
        drawerWidthRight={drawerWidthRight}
        mobileOpenRight={mobileOpenRight}
        handleDrawerToggleLeft={handleDrawerToggleLeft}
        handleDrawerToggleRight={handleDrawerToggleRight}
      />
      <CssBaseline />

      <Box>
        <LeftDrawer
          mobileOpen={mobileOpenLeft}
          handleDrawerToggleLeft={handleDrawerToggleLeft}
        />

        <div
          style={{
            marginLeft: DWLForCentralDiv,
            marginRight: DWRForCentralDiv,
            width: `calc(100vw - ${DWLForCentralDiv + DWRForCentralDiv}px)`,
          }}
        >
          {children}
        </div>

        {/* <CentralColoumn
          drawerWidthLeft={drawerWidthLeft}
          drawerWidthRight={drawerWidthRight}
        /> */}

        <RightDrawer
          mobileOpen={mobileOpenRight}
          handleDrawerToggleRight={handleDrawerToggleRight}
        />
      </Box>
      <Footer />
      {/* </Box> */}
    </div>
  );
}

export default Layout;
