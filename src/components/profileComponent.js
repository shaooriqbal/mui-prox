import * as React from 'react';
import { Avatar, Button, Menu, MenuItem, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  var nav = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    };
    const handleLogout = () => { 
    localStorage.clear();
    nav('/login');
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar      
        alt="User Avatar"
        src="https://via.placeholder.com/150"
        onClick={handleClick}
        sx={{ cursor: 'pointer', width: 50,height: 50 }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 1,
          sx: {
            overflow: 'visible',
            mt: 1.5,
            mb:8,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="User Avatar"
              src="https://via.placeholder.com/150"
              sx={{ mr: 2, width:45,height:45 }}
            />
            <Box>
              <Typography variant="body1">Jarry Hanier</Typography>
              <Typography variant="body2" color="textSecondary">
                Jarry.Hanier@example.com
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="contained" color="primary" fullWidth > 
            Update Profile
          </Button>
              </MenuItem>
              <MenuItem>
              <Button fullWidth onClick={handleLogout} variant="contained" color="error">Log Out</Button>
              </MenuItem>
      </Menu>
    </Box>
  );
}
