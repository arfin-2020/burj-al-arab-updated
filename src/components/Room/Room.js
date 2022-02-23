import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WcIcon from '@material-ui/icons/Wc';
import { Button, CardActionArea, CardActions, CardMedia, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Room = ({room}) => {
    const navigate = useNavigate()
    const handleBooking = (bedType) =>{
        navigate(`/book/${bedType}`, { state: 'Hello' });
    }
    return (
        <Card sx={{ maxWidth: 345 }} >
      <CardActionArea  onClick={()=>handleBooking(room.bedType)}>
        <CardMedia 
          component="img"
          height="140"
          image={room.imgUrl}
          alt="green iguana"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {room.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {room.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <LocalHotelIcon />: {room.bed} 
        </IconButton>
        <IconButton aria-label="share">
          <WcIcon />: {room.capacity} 
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {room.price} 
        </IconButton>
        <Button onClick={()=>handleBooking(room.bedType)} size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card>
    );
};

export default Room;