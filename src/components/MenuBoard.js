import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import WindowIcon from "@mui/icons-material/Window";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const drawerWidth = 60;

function MenuBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ height: "100%", padding: "10px", backgroundColor: "#333" }}>
      <WindowIcon fontSize="large" sx={{ color: "#6495ED" }} />
      <Divider sx={{ my: 2 }} />
      <HomeIcon fontSize="large" sx={{ color: "#6495ED" }} />
      <Divider sx={{ my: 2 }} />
      <InsertChartIcon fontSize="large" sx={{ color: "white" }} />
      <Divider sx={{ my: 2 }} />
      <ListAltIcon fontSize="large" sx={{ color: "white" }} />
      <Divider sx={{ my: 2 }} />
      <AccountBalanceWalletIcon fontSize="large" sx={{ color: "white" }} />
      <Divider sx={{ my: 2 }} />
      <ShoppingBagIcon fontSize="large" sx={{ color: "white" }} />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#333",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#333",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

MenuBoard.propTypes = {
  window: PropTypes.func,
};

export default MenuBoard;
