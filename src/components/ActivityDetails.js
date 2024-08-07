import React from 'react';
import { Container, Paper,Box } from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { date: '1', orders: 30 },
  { date: '2', orders: 45 },
  { date: '3', orders: 32 },
  { date: '4', orders: 55 },
  { date: '5', orders: 28 },
  { date: '6', orders: 48 },
  { date: '7', orders: 62 },
  { date: '8', orders: 50 },
  { date: '9', orders: 38 },
  { date: '10', orders: 45 },
  { date: '11', orders: 60 },
  { date: '12', orders: 75 },
  { date: '13', orders: 80 },
  { date: '14', orders: 90 },
  { date: '15', orders: 40 },
  { date: '16', orders: 65 },
  { date: '17', orders: 70 },
  { date: '18', orders: 55 },
  { date: '19', orders: 85 },
  { date: '20', orders: 60 },
  { date: '21', orders: 75 },
  { date: '22', orders: 95 },
  { date: '23', orders: 100 },
  { date: '24', orders: 85 },
  { date: '25', orders: 65 },
  { date: '26', orders: 90 },
  { date: '27', orders: 110 },
  { date: '28', orders: 130 },
  { date: '29', orders: 95 },
  { date: '30', orders: 120 },
  { date: '31', orders: 150 },
];

const ActivityDetails = () => {
  return (
    <Box sx={{}}>
    <Container sx={{ width: { xs: '100%', sm: '100%' ,xl :'100%',marginRight:'10%' },
     height: '100px' }}>
      <Paper sx={{ padding: '1px', marginTop: '10px', backgroundColor: '#333'}}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 30, right: 30, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Container>
    </Box>
  );
};

export default ActivityDetails;
