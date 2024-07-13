import React from 'react';
import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  var nav = useNavigate();

  const handleLogout = () => { 
     localStorage.clear();
      nav('/login');
  }
  return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' , margin:'10px'}}>
      <Typography>Home</Typography>
      <Button onClick={handleLogout} variant="contained" color="primary">Log Out</Button>
      </Box>
  )
}
