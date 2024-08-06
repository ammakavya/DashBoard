import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import Face3Icon from "@mui/icons-material/Face3";

const ReviewPage = () => {
  return (
    <div>
      <Paper elevation={1} sx={{width :'500px',height:'450px', backgroundColor:'#333',color:'white',borderRadius:'10px' ,marginTop:'10px'}}>
       
        <Box sx={{ display: "flex",marginLeft:'2%',marginTop:'10px'}}>
          <Avatar sx={{ bgcolor: "orange", width: 45, height: 45,marginTop:'10px' }}>
            <Face3Icon sx={{ color: "white" }} />
          </Avatar>
          <Typography
            sx={{
              color: "white",
              display: "flex",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            geethanjali
          </Typography>
        </Box>

        <Rating name="size-medium" defaultValue={4} sx={{marginRight:'70%', marginTop:'10px'}} />
   <br/>
        <Typography variant="subtitle2"
          sx={{ color: "white" }}
        >
          The service here is excellent. Our server was attentive without being
          intrusive. The entire staff worked seamlessly together to create a
          seamless dining experience. We never had to ask anything twice!
        </Typography>
      
        <Box sx={{ display: "flex", marginLeft:'2%' }}>
          <Avatar sx={{ bgcolor: "orange", width: 45, height: 45 }}>
            <Face3Icon sx={{ color: "white" }} />
          </Avatar>
          <Typography
            sx={{
              color: "white",
              display: "flex",
              padding: "10px",
              marginTop: "1px",
            }}
          >
            vekanta sathya narayana
          </Typography>
        </Box>

        <Rating name="size-medium" defaultValue={3} sx={{marginRight:'70%',marginTop:'10px'}} />
<br/>
        <Typography variant="subtitle2"
          sx={{ color: "white" }}
        >
         Tried hyderabadi chicken biryani from here. And having a unique different taste. Bu I liked it very much. Went for the dinner in a weekend and there was no seats available
        </Typography>
        <Box sx={{ display: "flex", marginLeft:'2%' }}>
          <Avatar sx={{ bgcolor: "orange", width: 45, height: 45 }}>
            <Face3Icon sx={{ color: "white" }} />
          </Avatar>
          <Typography
            sx={{
              color: "white",
              display: "flex",
              padding: "10px",
              marginTop: "1px",
            }}
          >
            hardin 
          </Typography>
        </Box>
        <Rating name="size-medium" defaultValue={5} sx={{marginRight:'70%',marginTop:'10px'}} />
<br/>
        <Typography variant="subtitle2"
          sx={{ color: "white", marginleft: "30%" }}
        >
         Tried hyderabadi chicken biryani from here. And having a unique different taste. Bu I liked it very much. Went for the dinner in a weekend and there was no seats available
        </Typography>
      </Paper>
      
    </div>
  );
};

export default ReviewPage;
