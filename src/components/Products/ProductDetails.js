import React from 'react';
import './ProductDetails.css';
import { Box, Grid, Paper, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { SvgIcon } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const ProductDetails = () => {
    const TriangleUpwardArrowIcon=  (props)=>(
    <SvgIcon {...props}>
    <polygon points="12,5 5,19 19,19" />
  </SvgIcon>)
    const TriangleDownwardArrowIcon=  (props)=>(
        <SvgIcon {...props}>
         <polygon points="12,20 4,8 20,8" />
      </SvgIcon>)
  return (
    
    <>
<Box sx={{marginTop:'10px', marginLeft:'10%',width:'1000px'}}>
<Grid container>
<Grid md={2} sx={{marginRight:'75px'}}>
<Paper  elevation={1} sx={{width:'215px',height:"150px",  backgroundColor:'#333 ' ,color:'GrayText' }}>
<LocalMallIcon fontSize='large' sx={{backgroundColor:'#6495ED' ,color:'white',marginTop:'10px',borderRadius:"5px"}}/>
    <Typography className='text'>
        total ordered
    </Typography>
    <Typography className='text' variant='h4' sx={{fontWeight:'bold'}}>75</Typography>
    <TriangleUpwardArrowIcon style={{ fontSize: 18, color: 'green',marginLeft:'60%' }} />
    <Typography variant='subtile2' sx={{color:'green'}}>3%</Typography>
</Paper>
</Grid>
<Grid md={2} sx={{marginRight:'75px'}}>
<Paper elevation={1} sx={{width:'215px',height:"150px", backgroundColor:'#333 ' ,color:'GrayText'}}>
<LocalMallIcon fontSize='large' sx={{backgroundColor:'#90EE90' ,color:'white',marginTop:'10px',borderRadius:"5px"}}/>
    <Typography className='text'>
        total Delivered
    </Typography>
    <Typography  className='text'variant='h4' sx={{fontWeight:'bold'}}>14</Typography>
    <TriangleDownwardArrowIcon style={{ fontSize: 18, color: 'red',marginLeft:'60%' }} />
    <Typography variant='subtile2' sx={{color:'red'}}>3%</Typography>
</Paper>
</Grid>
<Grid md={2} sx={{marginRight:'75px'}}>
<Paper  elevation={1} sx={{width:'215px',height:"150px", backgroundColor:'#333 ',color:'GrayText'}}>
<LocalMallIcon fontSize='large'  sx={{color:'white', backgroundColor:'#cb4335',marginTop:'10px',borderRadius:"5px"}}/>
    <Typography className='text'>
        total cancelled
    </Typography>
    <Typography  className='text'variant='h4'sx={{fontWeight:'bold'}}>05</Typography>
    <TriangleUpwardArrowIcon style={{ fontSize: 18, color: 'green',marginLeft:'60%' }} />
    <Typography variant='subtile2' sx={{color:'green'}}>3%</Typography>
</Paper>
</Grid>
<Grid md={2} sx={{marginRight:'75px'}}>
<Paper   elevation={1}sx={{width:'215px',height:"150px", backgroundColor:'#333 ', color:'GrayText'}}>
<MonetizationOnIcon fontSize='large' sx={{ backgroundColor:'#90EE90', color:'white',marginTop:'10px',borderRadius:"5px"}}/>
    <Typography className='text' sx={{marginTop:'2px'}}>
        total revenue
    </Typography>
    <Typography className='text' variant='h4' sx={{marginTop:'2px',fontWeight:'bold'}}>$12K</Typography>
    <TriangleDownwardArrowIcon style={{ fontSize: 18, color: 'red',marginLeft:'60%' }} />
    <Typography variant='subtile2' sx={{color:'red'}}>3%</Typography>
</Paper>
</Grid>

</Grid>
</Box>
    </>
  );
}

export default ProductDetails;