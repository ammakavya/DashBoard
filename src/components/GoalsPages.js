import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const GoalsPages = () => {
  return (
   <Box  >
    <Paper elevation={1} sx={{backgroundColor:'#333' ,width:'500px',height:'295px' ,marginTop:'20px'}}>
      <Box sx={{display:'flex' ,margin:'10px'}}>
      <Avatar sx={{ bgcolor: '#FA8072', width: 56, height: 56 ,marginTop:'20px'  }}>
      <LocationSearchingIcon sx={{ color: 'white' }} />
    </Avatar>
    <Typography sx={{color:'white' ,display:'flex', padding:'10px',marginTop:'25px'}}>Goals</Typography>
    <ArrowForwardIcon sx={{ marginLeft: 40, color: 'white' ,marginTop:'25px'}} />
      </Box>
      <Box sx={{display:'flex',marginTop:'20px',margin:'10px' }}>
      <Avatar sx={{ bgcolor: '#6495ED', width: 56, height: 56 ,marginTop:'10px'  }}>
      <RestaurantMenuIcon sx={{ color: 'white' }} />
    </Avatar>
    <Typography sx={{color:'white' ,display:'flex', padding:'10px',marginTop:'15px'}}>Popular Dishes</Typography>
    <ArrowForwardIcon sx={{ marginLeft: 31, color: 'white' ,marginTop:'25px' }} />
      </Box>
      <Box sx={{display:'flex',marginTop:'20px',margin:'10px' }}>
      <Avatar sx={{ bgcolor: 'orange', width: 56, height: 56 ,marginTop:'10px'   }}>
      <FastfoodIcon sx={{ color: 'white' }} />
    </Avatar>
    <Typography sx={{color:'white' ,display:'flex', padding:'10px',marginTop:'15px'}}>Menus</Typography>
    <ArrowForwardIcon sx={{ marginLeft: 39, color: 'white' ,marginTop:'25px'}} />
      </Box>
    </Paper>
   </Box>
  )
}

export default GoalsPages