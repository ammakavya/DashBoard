import React from 'react';
import './ProductDetails.css';
import { Box, Grid, Paper, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { SvgIcon } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const ProductDetails = () => {
  const TriangleUpwardArrowIcon = (props) => (
    <SvgIcon {...props}>
      <polygon points="12,5 5,19 19,19" />
    </SvgIcon>
  );

  const TriangleDownwardArrowIcon = (props) => (
    <SvgIcon {...props}>
      <polygon points="12,20 4,8 20,8" />
    </SvgIcon>
  );

  return (
    <Box sx={{ padding: 2, }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#333', color: 'white' ,height:'175px'  }}>
            <LocalMallIcon fontSize='large' sx={{ backgroundColor: '#6495ED', color: 'white', borderRadius: '5px' }} />
            <Typography variant='body2'>Total Ordered</Typography>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>75</Typography>
            <TriangleUpwardArrowIcon sx={{ fontSize: 18, color: 'green', float: 'right' }} />
            <Typography variant='subtitle2' sx={{ color: 'green', float: 'right' }}>3%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#333', color: 'white',height:'175px' }}>
            <LocalMallIcon fontSize='large' sx={{ backgroundColor: '#90EE90', color: 'white', borderRadius: '5px' }} />
            <Typography variant='body2'>Total Delivered</Typography>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>14</Typography>
            <TriangleDownwardArrowIcon sx={{ fontSize: 18, color: 'red', float: 'right' }} />
            <Typography variant='subtitle2' sx={{ color: 'red', float: 'right' }}>3%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#333', color: 'white',height:'175px' }}>
            <LocalMallIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#cb4335', borderRadius: '5px' }} />
            <Typography variant='body2'>Total Cancelled</Typography>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>05</Typography>
            <TriangleUpwardArrowIcon sx={{ fontSize: 18, color: 'green', float: 'right' }} />
            <Typography variant='subtitle2' sx={{ color: 'green', float: 'right' }}>3%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#333', color: 'white',height:'175px' }}>
            <MonetizationOnIcon fontSize='large' sx={{ backgroundColor: '#90EE90', color: 'white', borderRadius: '5px' }} />
            <Typography variant='body2'>Total Revenue</Typography>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>$12K</Typography>
            <TriangleDownwardArrowIcon sx={{ fontSize: 18, color: 'red', float: 'right' }} />
            <Typography variant='subtitle2' sx={{ color: 'red', float: 'right' }}>3%</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;
