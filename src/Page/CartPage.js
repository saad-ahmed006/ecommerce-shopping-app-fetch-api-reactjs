import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Image from '../Assets/pexels-photo-432059.webp'
export default function CartPage() {
    return (
        <Box sx={{ bgcolor: 'gray', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <img src={Image} style={{ width: '300px' }}></img>
            </Box>
            <Box>
                <Typography variant='h4'>gbgfbgfffffffffffffffffffffffffffffffff</Typography>
                <Typography variant='h6'>5444444444444444</Typography>

                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{backgroundColor:'#4d0101'}}>+</Button>
                <Typography variant='h6'>54</Typography>
                <Button style={{backgroundColor:'#4d0101'}}>+</Button>
                </Box>
                
            </Box>
        </Box>
    )

    }