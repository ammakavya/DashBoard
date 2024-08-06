import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, Avatar } from '@mui/material';

function createData(customer, OrderNo, Amount, Status, avatarUrl) {
  return { customer, OrderNo, Amount, Status, avatarUrl };
}

const rows = [
  createData('wade warren', 1, '$200', 'delivered', 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'),
  createData('jane cooper', 2, '$500', 'delivered','https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'),
  createData('guy hawkins', 3, '$750', 'cancelled','https://www.shutterstock.com/image-photo/adult-female-avatar-image-on-260nw-2420293027.jpg'),
  createData('kristin watson', 4, '$375', 'pending','https://thenewstack.io/wp-content/uploads/2016/11/Joe-Emison_avatar_1479739811.png'),
  createData('cody fisher', 5, '$160', 'delivered','https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg'),
];




function Transactions() {
  return (
    <Box sx={{ marginLeft: '9%' }}>
      <TableContainer component={Paper} sx={{ backgroundColor: '#333', width: '950px' }}>
        <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold', marginRight: '80%' }}>
          Recent Orders
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Customer</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Order No</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Amount</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.customer}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                  <Avatar src={row.avatarUrl} alt={row.customer} sx={{ marginRight: 2 }} />
                  {row.customer}
                </TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.OrderNo}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.Amount}</TableCell>
                <TableCell align="right" sx={{ color: row.Status === 'cancelled' ? 'green' : 'inherit' }}>
                  <Box
                    component="span"
                    sx={{
                    
                      color: row.Status === 'cancelled' || row.Status === 'pending' ?'red' : 'green',
                      padding: '0 4px',
                      borderRadius: '4px',
                    }}
                  >
                    {row.Status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Transactions;
