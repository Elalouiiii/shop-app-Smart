// @ts-nocheck
import { useTheme } from "@emotion/react";
import { Close, ExpandMore, KeyboardArrowRightOutlined, SportsEsportsOutlined, WindowOutlined } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";


export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key) === 'Tab' || (event.key) === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mt: 5
    }}>
      <Box>

        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            width: 222, bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WindowOutlined />
          <Typography sx={{
            padding: "0",
            textTransform: "capitalize",
            mx: 1,
          }}>
          </Typography>
          Categories
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            // ".MuiPaper-root":{widows:228}
            width: 222,
          }}
        >
          <MenuItem onClick={handleClose}>   </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>

          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>My account</ListItemText>

          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Logout

            </ListItemText>

          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Moga menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
        </Stack>
      )}

      {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />

        </IconButton>)}


      <SwipeableDrawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        sx={{
          ".MuiPaper-root.css-axr3hc-MuiPaper-root-MuiDrawer-paper": { height: "100%" }
        }}
      >

        <Box className="border" sx={{
          Width: 444, mx: "auto",
          mt: 6,
          position: "relative",
          p: 10,
        }}
        >
          <IconButton sx={{
            position: "absolute",
            top: 0, right: 0,
          }} onClick={toggleDrawer("top", false)} >
            <Close />

          </IconButton>
          {[
            { mainLink: "Home", subLink: ["Link 1", "Link 2", "Link 3",] },
            { mainLink: "Moga menu", subLink: ["Link 1", "Link 2", "Link 3",] },
            { mainLink: "Full serem menu", subLink: ["Link 1", "Link 2", "Link 3",] },
            { mainLink: "Pages", subLink: ["Link 1", "Link 2", "Link 3",] },
            { mainLink: "user Account", subLink: ["Link 1", "Link 2", "Link 3",] },
            { mainLink: "vender account", subLink: ["Link 1", "Link 2", "Link 3",] },



          ].map((item) => {
            return (
              <Accordion key={item.mainLink} elevation={2} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink} </Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {
                    item.subLink.map((link) => {
                      return (
                        <ListItem key={link} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      )
                    })
                  }

                </List>
              </Accordion>
            )
          })
          }

        </Box>
      </SwipeableDrawer>
    </Container>


  )
}
