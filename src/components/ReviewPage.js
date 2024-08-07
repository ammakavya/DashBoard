import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import Face3Icon from "@mui/icons-material/Face3";

const reviews = [
  {
    name: "Geethanjali",
    rating: 4,
    review: "The service here is excellent. Our server was attentive without being intrusive. The entire staff worked seamlessly together to create a seamless dining experience. We never had to ask anything twice!",
  },
  {
    name: "Vekanta Sathya Narayana",
    rating: 3,
    review: "Tried Hyderabadi chicken biryani from here. It has a unique different taste. I liked it very much. Went for dinner on a weekend and there were no seats available.",
  },
  {
    name: "Hardin",
    rating: 5,
    review: "“This restaurant has such a cozy and charming atmosphere! From the moment you walk in, you feel right at home.",
  },
];

const ReviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' ,mt:3}}>
      <Paper
        elevation={1}
        sx={{
          width: { xs: '100%', sm: '100%' ,xl:'100%'},
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '10px',
          p: 2,
        }}
      >
        {reviews.map((review, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar sx={{ bgcolor: "orange", width: 45, height: 45, mr: 1 }}>
                <Face3Icon sx={{ color: "white" }} />
              </Avatar>
              <Typography sx={{ color: "white" }}>{review.name}</Typography>
            </Box>
            <Rating
              name={`rating-${index}`}
              defaultValue={review.rating}
              sx={{ mb: 1 ,Color:'white' }}
            />
            <Typography variant="subtitle2" sx={{ color: "white" }}>
              {review.review}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default ReviewPage;
