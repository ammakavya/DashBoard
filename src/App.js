import "./App.css";
import NavBar from "./components/navbar/NavBar";
import MenuBoard from "./components/MenuBoard";
import ProductDetails from "./components/Products/ProductDetails";
import { Box, Grid, Typography } from "@mui/material";
import Transactions from "./components/Transactions";
import Profits from "./components/Profits";
import GoalsPages from "./components/GoalsPages";
import ActivityDetails from "./components/ActivityDetails";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ padding: 1 }}>
        <Typography
          variant="h5"
          sx={{ color: "white", fontWeight: "bold", marginBottom: 1,marginLeft:'125px' }}
        >
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={0.8}>
            <MenuBoard />
          </Grid>
          <Grid item xs={12} sm={8} md={7} sx={{padding:'10px'}}>
            
              <ProductDetails />
              <ActivityDetails />
                <Transactions/>
        
          
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Profits />
            <GoalsPages />
           
            <ReviewPage />
           
          </Grid>
         
        </Grid>
      </Box>
    </div>
  );
}

export default App;
