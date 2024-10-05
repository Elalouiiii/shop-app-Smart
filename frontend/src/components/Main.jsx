import { useTheme } from '@emotion/react';
import { Box, CircularProgress, Container, IconButton, Rating, Stack, Typography } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../src/Redux/product'

export default function Main() {

    const handleAlignment = (event, newValue) => {
        setMydata(newValue);
    };
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };









    const allProductsAPI = "products?populate=*"
    const menCategoryProductsAPI = "products?populate=*&filters[productCategory][$eq]=men"
    const womenCategoryProductsAPI = "products?populate=*&filters[productCategory][$eq]=women"
    const [mydata, setMydata] = useState(allProductsAPI)
    const [clickedproduct, setClickedproduct] = useState({})


    // redux ==>get data 
    const { data, error, isLoading } = useGetproductByNameQuery(mydata);
    if (isLoading) {
        return (

            <Box sx={{ py: 11, textAlign: 'center' }} variant='h6'><CircularProgress /> </Box>
        )
    }
    if (error) {
        return (
            <Typography variant='h6'>{error.message}</Typography>
        )
    }



    if (data) {
        return (
            <Container sx={{ py: 9, }}>
                <Stack direction={"row"} alignItems={'center'} justifyContent={"space-between"} flexWrap={"wrap"} gap={3} >
                    <Box>
                        <Typography variant='h6'> Selected Products </Typography>
                        <Typography fontWeight={300} variant='body1'>
                            All our arrivals in a exclusive brand selection
                        </Typography>
                    </Box>
                    <ToggleButtonGroup
                        color="error"
                        value={mydata}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233,69,96,0.5) !important",
                                color: "#e94560",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className='mybtn' value={allProductsAPI} aria-label="left aligned">
                            All Products
                        </ToggleButton>
                        <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} className='mybtn' value={menCategoryProductsAPI} aria-label="centered">
                            MEN category
                        </ToggleButton>
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className='mybtn' value={womenCategoryProductsAPI} aria-label="right aligned">
                            WOMEN category
                        </ToggleButton>

                    </ToggleButtonGroup>
                    <Stack>

                    </Stack>
                </Stack>

                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    {data.data.map((item) => {
                        return (
                            <Card key={item} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { scale: "1.1" }, transition: "0.35s", rotate: "1deg" }}>
                        
                                <CardMedia
                                    sx={{ height: 277 }}
                                    image={`${import.meta.env.VITE_BASE_URL}${item.productImg[0].url}`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                    >
                                        <Typography gutterBottom variant='h6' component="div">{item.productTitle} </Typography>
                                        <Typography variant='subtitle1' component="p"> $ {item.productPrice}</Typography>
                                    </Stack>
                                    <Typography variant='body2' color="text.secondary">
                                        {item.productDescription}
                                    </Typography>

                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }} >
                                    <Button sx={{ textTransform: "capitalize" }} size="small" onClick={()=>{
                                        handleClickOpen();
                                        setClickedproduct(item);
                                        console.log(item)
                                    }}>
                                        <AddShoppingCartOutlined sx={{ mr: 1, }} fontSize='small' />
                                        add to cart</Button>
                                    <Rating precision={0.5} name="read-only" value={item.productRating} readOnly />
                                </CardActions>
                            </Card>
                        )
                    })}

                </Stack>





                <Dialog
                    sx={{
                        ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } }
                    }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton sx={{
                        position: "absolute",
                        top: 0, right: 0,
                    }} onClick={handleClose} >
                        <Close />

                    </IconButton>
                    <ProductDetails clickedproduct={clickedproduct}/>
                </Dialog>
            </Container>
        )
    }
}



