import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const options = [
    'Web Development',
    'Software',
    'Hiking',
  ];

export default function ProfileCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Barret Griffin
        </Typography>
        <h3>Major</h3>

<Typography variant="body2" color="text.secondary">
Electrical Engineering
</Typography>
        <h3>About</h3>

        <Typography variant="body2" color="text.secondary">
       I enjoy riding dirt bikes, web development and working out. 
        </Typography>
        <h3> Interests</h3>
        {options.map((option) => (
           <li >
           {option}
         </li> 
         
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">match</Button>
        <Button size="small">decline</Button>
      </CardActions>
    </Card>
  );
}
