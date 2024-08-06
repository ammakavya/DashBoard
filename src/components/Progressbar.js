import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";

const TriangleUpwardArrowIcon = (props) => (
  <SvgIcon {...props}>
    <polygon points="12,5 5,19 19,19" />
  </SvgIcon>
);

const ProgressBar = (props) => {
  const { value } = props;
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
        size={{ xs: 80, sm: 100 }} // Responsive size
        thickness={4}
        sx={{
          color: "#708090", // Color of the remaining part
          position: "absolute",
          zIndex: 1,
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={{ xs: 80, sm: 100 }} // Responsive size
        thickness={4}
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

export default ProgressBar;
