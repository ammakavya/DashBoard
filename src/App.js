
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
        <Grid container>
          <Grid md={0.5}>
            <MenuBoard />
          </Grid>
          <Grid md={7.7}>
            <ProductDetails />
            <ActivityDetails />
            <Transactions />
          </Grid>
          <Grid md={3.5}>
            <Profits />
            <GoalsPages />
            <ReviewPage />
          </Grid>
          <Grid></Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
