import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GoalsPages = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "#333",
          width: { xs: "100%", sm: "100%", xl: "100%" },
          height: "100%",
          p: 5,
          marginTop: "5px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "#FA8072", width: 56, height: 56, mr: 2 }}>
            <LocationSearchingIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography sx={{ color: "white", flexGrow: 1 }}>Goals</Typography>
          <ArrowForwardIcon sx={{ color: "white" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "#6495ED", width: 56, height: 56, mr: 2 }}>
            <RestaurantMenuIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography sx={{ color: "white", flexGrow: 1 }}>
            Popular Dishes
          </Typography>
          <ArrowForwardIcon sx={{ color: "white" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "orange", width: 56, height: 56, mr: 2 }}>
            <FastfoodIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography sx={{ color: "white", flexGrow: 1 }}>Menus</Typography>
          <ArrowForwardIcon sx={{ color: "white" }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default GoalsPages;
