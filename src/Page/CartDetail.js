import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Image from '../Assets/pexels-photo-432059.webp'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function CartDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const GetProduct = async (url) => {
    const response = await axios.get(url)
    const data = await response.data
    // console.log(data);
    // console.log(id);
    setProduct(data)
    setLoading(false)

  }

  useEffect(() => {
    GetProduct(`https://fakestoreapi.com/products/${id}`)
  }, [id])


  return (

    <>
      <Typography variant='h4' fontWeight={'bold'} marginTop={'20px'} textAlign={'center'}>Items Details Page</Typography>
      <Card sx={{ maxWidth: 600, border: '1px solid #581845', margin: '2rem auto', padding: '3px', position: 'relative' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={product.image}
          style={{  width: "15rem", margin: ' 10px auto', borderRadius: '5px' }}
        />
        <Typography variant='h5' marginTop={2} textAlign={'center'}><strong>{product.name}</strong></Typography>
        <CardContent>
          <Box sx={{ border: '1px solid #581845', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '20px', paddingBottom: '20px' }}>
            <Box sx={{ width: '40%' }}>

              <Typography><strong>Category :</strong>{product.category} </Typography>
              <Typography marginTop={2}><strong>Price :</strong> ₹ {product.price}</Typography>

            </Box>
            <Box sx={{ width: '40%' }}>
              <Typography marginTop={2} ><strong>Rating : </strong><span style={{ backgroundColor: 'green', padding: '3px', borderRadius: '3px', color: 'white' }}>{product.rating && product.rating.rate} ★</span></Typography>
              <Typography marginTop={2}><strong>Order Review :</strong>{product.description}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>

            <Button style={{ backgroundColor: '#4d0101', color: 'white', margin: '10px' }} >Add To Cart</Button>
            <Link to={"/cart"} style={{textDecoration:'none'}}><Button style={{ backgroundColor: '#4d0101', color: 'white', margin: '10px' }}>Go to Cart</Button></Link>
          </Box>
        </CardContent>

      </Card>   </>

  )
}


