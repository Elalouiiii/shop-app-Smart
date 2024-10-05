import { useContext } from "react";
import { ColorModeContext } from "../../src/theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";

const options = [
  'AR',
  'EN',

];



export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Box sx={{
      bgcolor: 'black',
      py:'2px',
      borderBottomLeftRadius:4,
      borderBottomRightRadius:4,


    }} >
      <Container>

      <Stack direction={"row"} alignItems={"center"}>

        <Typography sx={{
          mr: '2',
          p: '3px 10px',
          bgcolor: '#D23F57',
          fontSize: '10px',
          fontWeight: 'bold',
          color: '#ffff'

        }}
          variant="body2"

        >
          HOT
        </Typography>

        <Typography sx={{
          fontSize: '12px',
          fontWeight: '300',
          color: '#ffff',
          marginLeft: '13px'

        }}
          variant="body2"
        >
          Free Express shopping
        </Typography>

        <Box flexGrow={"1"} />


















        <div style={{ color: '#fff' }}>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined  sx={{ fontSize:'16px',color:'#FFF'}}/>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{fontSize:'16px',color:'#fffff'}} />
            </IconButton>
          )}
        </div>
        <List



          component="nav"
          aria-label="Device settings"
          
        >
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            sx={{ "&:hover": {cursor:'pointer',px:1,}   }}
          >
            <ListItemText
              sx={{  ".MuiListItemText-root" :{fontSize:'12px',color:'#fffff'}            }}
              secondary={options[selectedIndex]}
            />
            <ExpandMore sx={{fontSize:'16px',color:'#FFF'}}  />
          </ListItemButton>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
             sx={{fontSize:'11px',p:'3px 10px ',minHeight:'10px'}}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>










        <TwitterIcon sx={{
          fontSize: '16px',
          color: '#ffff',
        }} />
        <FacebookIcon sx={{
          fontSize: '16px',
          color: '#ffff',
          mx: 1,
        }} />
        <InstagramIcon sx={{
          fontSize: '16px',
          color: '#ffff',
        }} />
      </Stack>

      </Container>
    </Box>

  )
}
