import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/features/shopsSlice';


export default function ProductDetails({ clickedproduct }) {
    const dispatch=useDispatch()

    console.log(clickedproduct.productImg);
    const [selectionbestproduct, setSelectionbestproduct] = useState(0)
    return (
        <Box display={"flex"} alignItems={'center'} gap={2.5} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box display={'flex'}>

                <img width={300} src={`http://localhost:1337${clickedproduct.productImg[selectionbestproduct].url}`} alt="" />
            </Box>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>

                <Typography variant='h5'> {clickedproduct.productTitle}</Typography>
                <Typography my={0.4} fontSize={"22px"} color={'crimson'}> {clickedproduct.productPrice} $ </Typography>
                <Typography variant='body1'>
                    {clickedproduct.productDescription}
                </Typography>


                <Stack sx={{ justifyContent: { xs: "center", sm: 'left' } }} direction={'row'} gap={1.5} my={2}>
                    {clickedproduct.productImg.map((item, index) => {
                        return (

                            <img
                                onClick={() => {
                                    setSelectionbestproduct(index);
                                }}
                                style={{ borderRadius: 3 }}
                                width={90}
                                height={100}
                                key={item.id}
                                src={`http://localhost:1337${item.url}`}

                                alt=""
                            />
                        );
                    })}
                </Stack>

                <Button sx={{
                    textTransform: "capitalize", mb: { xs: 1, sm: 0, }
                }}
                    variant='contained'
                >
                    <AddShoppingCartOutlined sx={{ mr: 1, fontSize: "small" }} />

                    <div onClick={() => dispatch(addProduct(clickedproduct))}>
                        <span> Buy now</span>
                    </div>




                </Button>
            </Box>
        </Box>
    )
}
