import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import Image from '../../Assets/pexels-photo-432059.webp'

export default function Main() {
  return (
    <>

      <Grid container style={{ backgroundColor: 'grey', height: '456px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Grid item sm={12} md={6} style={{ textAlign: 'center' }}>
          <Box><Typography variant='h3' color={'#4d0101'} fontWeight={'bold'}  >NEW SEASON ARRIVALS</Typography></Box>
          <Box><Typography variant='h5'>CheckOut All The Trends</Typography></Box>
        </Grid>
        <Grid item sm={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ borderTopRightRadius: '80px', width: '350px' }} src={Image} alt={'MainImage'}></img>
        </Grid>

      </Grid>

    </>

  )
}
