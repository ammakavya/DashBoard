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


const drawerWidth = 120;

function MenuBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div
      style={{ height: "1000px", padding: "20px", backgroundColor: "#333" }}
    >
      <WindowIcon fontSize="large" sx={{color:'	#6495ED'}} />
      <br/>
      <br/>
      <Divider />
      <HomeIcon fontSize="large" sx={{color:'	#6495ED'}} />
      <br/>
      <br/>
      <Divider />
      <InsertChartIcon fontSize="large"  sx={{color:'	white' ,borderRadius:'15px'}}/>
      <br/>
      <br/>
      <Divider />
      <ListAltIcon fontSize="large"  sx={{color:'	white' ,borderRadius:'15px'}}/>
      <br/>
      <br/>
      <Divider />
      <AccountBalanceWalletIcon fontSize="large" sx={{color:'	white' ,borderRadius:'15px'}} />
      <br/>
      <br/>
      <Divider />
      <ShoppingBagIcon fontSize="large" sx={{color:'	white' ,borderRadius:'15px'}} />
      <br/>
      <br/>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex",  }}>
      <CssBaseline />
      <Box
        component="nav"
        aria-label="mailbox folders" 
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
           
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: "black",

            display: { xs: "none", sm: "block" , },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default MenuBoard;
