
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
      <Typography
        variant="h5"
        sx={{ color: "white", fontWeight: "bold", marginRight: "70%" }}
      >
        Dashboard
      </Typography>
      <Box>
        <Grid container className="grid-container">
        <Grid item xs={12} sm={4} md={0.5}>
  <MenuBoard />
</Grid>
<Grid item xs={12} sm={8} md={7}>
  <ProductDetails />
  <ActivityDetails />
  <Transactions />
</Grid>
<Grid item xs={12} sm={4} md={3}>
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
