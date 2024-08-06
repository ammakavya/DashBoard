import React from 'react';
import './Navbar.css';
import { Box, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: '#333', width: 35, height: 35, marginRight: '50px' }}>
          <EmailIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: '#333', width: 35, height: 35, marginRight: '40px' }}>
          <NotificationsActiveIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: '#333', width: 35, height: 35, marginRight: '30px' }}>
          <SettingsIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: '#333', width: 35, height: 35, marginRight: '30px' }}>
          <AccountCircleIcon />
        </Avatar>
      </Box>
    </nav>
  );
};

export default NavBar;
