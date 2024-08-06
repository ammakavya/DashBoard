import React from "react";
import { Box, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const TriangleUpwardArrowIcon = (props) => (
  <SvgIcon {...props}>
    <polygon points="12,5 5,19 19,19" />
  </SvgIcon>
);
const CircularProgressWithLabel = (props) => {
  const { value, size, thickness } = props;
  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Background Circle */}
      <CircularProgress
        variant="determinate"
        value={100} // Full circle
        size={size}
        thickness={thickness}
        sx={{
          color: "#708090", // Color of the remaining part
          position: "absolute",
          zIndex: 1,
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={thickness}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      />
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        top={0}
        left={0}
        bottom={0}
        right={0}
      >
        <Typography variant="subtitle2" component="div" color="white">
          {`${Math.round(value)}%`}
        </Typography>
        {value >= 70 && (
          <Typography variant="caption" component="div" color="white">
            goal reached
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const Profits = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: { xs: "100%", sm: "500px" }, // Responsive width
        height: "150px",
        backgroundColor: "#333",
        color: "white",
        borderRadius: "10px",
        marginTop: "10px",
        // Add padding
      }}
    >
      <Box sx={{ padding: "5px" }}>
        <Typography sx={{ marginRight: "80%" }}>Net Profit</Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ marginRight: "25%", marginTop: "10%", fontWeight: "bold" }}
            >
              $6759.25
            </Typography>
            <Box sx={{ display: "flex" }}>
              <TriangleUpwardArrowIcon
                style={{ fontSize: 18, color: "green", marginLeft: "7%" }}
              />
              <Typography
                variant="subtile2"
                sx={{ color: "green", marginLeft: "1%" }}
              >
                3%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginleft: "10" }}>
            <CircularProgressWithLabel value={70} size={100} thickness={4} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Profits;
