import { ExpandMore } from "@mui/icons-material";
import { Container, IconButton, Button, InputBase, ListItem, Stack, Typography, DialogContentText } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useState } from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from "@emotion/react";
import Dialog from '@mui/material/Dialog';
import Cart from "./Cart";
import { Close } from "@mui/icons-material";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import clairAllCart from "../../src/Redux/features/shopsSlice"
import logoimage from '../imageProduct/logoimg.png'



const options = ["ALL Categories", "CAR", "Clothes", "Electronic"];




const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '2px solid #77777',
  '&:hover': {
    border: '2px solid #3333',

  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));





export default function Header2({ item }) {


  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.shopCart)
  const [opens, setOpens] = useState(false);

  let total = 0
  cart.map((item) => (
    total = total + (item.productPrice * item.quantity)
  ))
  localStorage.setItem("cart", JSON.stringify(cart))

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosed = () => {
    setOpens(false);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container sx={{ my: 3, display: 'flex', justifyContent: 'space-between' }}>
      <Stack alignItems={"center"} >
        <img src={logoimage} width={'90px'} height={'80px'} alt="" />
        {/* <h3>*Shop-Aloui* </h3> */}
        <Typography variant="body2">
        </Typography>
      </Stack>

      <Search sx={{
        borderRadius: '22px',
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            bgcolor: theme.palette.myColor.main,
            borderBottomRightRadius: 22,
            borderTopRightRadius: 22,
            p: '0',

          }}
        >
          <ListItem

            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              sx={{
                widows: 80,
                textAlign: "center",
                "&:hover": { cursor: 'pointer' }
              }}
              secondary={options[selectedIndex]}

            />
            <ExpandMore sx={{ fontSize: '16px' }} />
          </ListItem>
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
              sx={{ fontSize: '13px' }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <div style={{ position: 'relative', marginRight: '43%' }} color="primary">



            <Button onClick={() => {
              setOpens(true)
              setClickedproduct();
              console.log()
            }} >
              <ShoppingCartIcon sx={{ marginLeft: '75%' }} />
            </Button>
            <span style={{ position: 'absolute', marginBottom: '13%', backgroundColor: 'red', color: "white" }}>
              {cart.length}

            </span>
          </div>

          <IconButton sx={{
            margi: "12px",
          }} >
            <Person2OutlinedIcon />
          </IconButton>


        </IconButton>

      </Stack>






      <Dialog
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "100%", md: 1000 } }
        }}
        open={opens}

        onClose={handleClosed}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h1 style={{ textAlign: 'center', borderBottom: "1px solid #131212" }}>--- Shopping Carte ---</h1>

        <IconButton sx={{
          position: "absolute",
          top: 0, right: 0,
        }} onClick={handleClosed} >
          <Close />

        </IconButton>

        {
          cart.length > 0 ? cart.map((item, index) => (
            <Cart key={index} item={item} />

          ))
            :
            <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold', color: 'greenyellow' }}>
              Product list is empty! ! ! !
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
        }
        <div>
          <div className='clear' >
            <Button sx={{ backgroundColor: 'black', color: "white", padding: '8px 22px', marginTop: "3%" }} onClick={() => dispatch(clairAllCart())}> Clear </Button>

            <h5 style={{ marginTop: "3%", marginLeft: '35%' }}>Totale :  <span>{total}  DT</span> </h5>

          </div>
          <div>  <Button sx={{ backgroundColor: 'rgb(255, 0, 0)', color: "white", float: 'right', marginRight: '11%', marginBottom: "5%", padding: '10px 23px', fontWeight: 'bold' }}>Go To Paie </Button>  </div>

        </div>


      </Dialog>

    </Container>
  )
}
