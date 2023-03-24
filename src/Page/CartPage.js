import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Image from '../Assets/pexels-photo-432059.webp'
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function CartPage() {
    const state = useSelector((state) => state.CartReducer.carts)
    const [product] = useState(state)
    console.log(product);
    return (
        <>
            {
                product.map((product) => {

                    return <Box sx={{ bgcolor: 'gray', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} key={product.id}>
                        <Box sx={{ marginTop: '50px', }}>
                            <img src={product.image} alt={"cartIma"} width={'240px'} ></img>
                        </Box>
                        <Box>
                            <Typography variant='h4' textAlign={'center'} marginTop={'10px'}>{product.title}</Typography>
                            <Typography variant='h6' textAlign={'center'} fontWeight={'bold'} marginTop={'10px'}>1 X ₹55.9 = ₹55.9</Typography>

                            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                                <Button style={{ backgroundColor: '#4d0101', color: 'white', marginRight: '10px' }}><AddIcon /></Button>
                                <Typography variant='h6'>{state.length}</Typography>
                                <Button style={{ backgroundColor: '#4d0101', color: 'white', marginLeft: '10px' }}><RemoveIcon /></Button>
                            </Box>

                        </Box>
                    </Box>
                })


            }
        </>
    )

}