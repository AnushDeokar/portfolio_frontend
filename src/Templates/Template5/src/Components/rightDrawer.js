import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router";

const icons = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    name: "Services",
    icon: <BusinessCenterIcon />,
    url: "/services",
  },
  {
    name: "Education",
    icon: <SchoolIcon />,
    url: "/education",
  },
  {
    name: "Projects",
    icon: <WorkIcon />,
    url: "/projects",
  },
  {
    name: "Contact",
    icon: <ContactPageIcon />,
    url: "/contact",
  },
  {
    name: "Testimonials",
    icon: <PeopleIcon />,
    url: "/testimonials",
  },
];

const drawerWidthRight = 70;

function RightDrawer({ mobileOpen, handleDrawerToggleRight }) {
  const { window } = mobileOpen;
  const history = useHistory();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {icons.map((data) => (
          <ListItem
            button
            key={data.name}
            style={{ margin: "30px 0px" }}
            // to={data.url}
            onClick={() => history.push(data.url)}
          >
            <ListItemIcon>{data.icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        anchor={"right"}
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggleRight}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidthRight,
            zIndex: 100,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        anchor={"right"}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidthRight,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

RightDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default RightDrawer;
