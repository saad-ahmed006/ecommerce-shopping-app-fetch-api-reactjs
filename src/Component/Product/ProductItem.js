import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CartDetailPage from '../../Page/CartDetail';
export default function ProductItem({title,image,price,category,id}) {
    return (
        <Card sx={{ width:'300px' ,border:'1px solid grey',margin:'10px'}}>
            <CardMedia
                sx={{ height: 200 ,width:200,margin:'20px auto'}}
                image={image}
                title="green iguana"
            />
            <CardContent style={{ textAlign: 'center', }}>
                <Typography gutterBottom variant="h4"  component="div">
                   {title.slice(0,12)}..
                </Typography>
                <Typography variant="h6" color="text.secondary" >
                PKR: {price}
                </Typography>
            </CardContent>
            <CardActions  style={{ display:'flex',justifyContent:'center' }}>
            <Link to={`/produc/${id} `} style={{textDecoration:'none'}}>   <Button size="medium" variant='contained' style={{backgroundColor:'#4d0101'}}  >Buy Now</Button></Link>
            </CardActions>
        </Card>)
}
