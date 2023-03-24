import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'
import { Typography, } from '@mui/material'
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Loading from '../Loading/Loading';

export default function Product() {
  const [data, setData] = useState([])
  const [filterItem, setFilterItem] = useState(data)
  const [loading, setLoading] = useState(true)
  const GetProduct = async (url) => {
    const response = await axios.get(url)
    const data = await response.data
    console.log(data);
    setData(data)
    setFilterItem(data)
    setLoading(false)

  }



  useEffect(() => {
    GetProduct('https://fakestoreapi.com/products')
  }, [])

  const FilterCategory = (categoryItem) => {
    const updateItem = data.filter((filt) => filt.category === categoryItem)
    setFilterItem(updateItem)
    setData(data)
  }


  return (
    <>
      <Typography variant='h3' fontWeight={'bold'} style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Lasted products</Typography>
      <Divider variant="middle" style={{ borderColor: '#4d0101' }} />

      <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '20px' }}>
        <Button size="medium" style={{ border: '1px solid #4d0101', color: 'black', margin: '10px' }} onClick={() => setFilterItem(data)} >ALL</Button>
        <Button size="medium" style={{ border: '1px solid #4d0101', color: 'black', margin: '10px' }} onClick={() => FilterCategory("jewelery")} >JEWELERY</Button>
        <Button size="medium" style={{ border: '1px solid #4d0101', color: 'black', margin: '10px' }} onClick={() => FilterCategory("men's clothing")} >MEN'S CLOTHING</Button>
        <Button size="medium" style={{ border: '1px solid #4d0101', color: 'black', margin: '10px' }} onClick={() => FilterCategory("electronics")} >ELECTRONICS</Button>
        <Button size="medium" style={{ border: '1px solid #4d0101', color: 'black', margin: '10px' }} onClick={() => FilterCategory("women's clothing")} >WOMEN'S CLOTHING</Button>
      </Box>
      {loading ? <Loading /> :
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
          {
            filterItem.map((Item) => {
              return <ProductItem image={Item.image} title={Item.title} price={Item.price} category={Item.category} id={Item.id} key={Item.id} />
            })
          }
        </Box>
      }
    </>
  )
}


