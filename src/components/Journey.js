import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import '../css/Journey.css'


export default function Journey({owner,from, to, date,seats}) {
  return (
    <Card sx={{ width: 275, height:200, margin:1 }}>
      <CardContent>
        <div className='journey-card-title'>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Typography variant='subtitle1'>
              {owner} viaja!
          </Typography>
        </div>
        
        <p className='journey-body'><MapIcon/> {from} - {to}</p>
        <p className='journey-body'><CalendarMonthIcon/> {date}</p>
        <p className='journey-body'> <PersonIcon/> {seats}</p>
        
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button variant='contained' size="small">Sumarme</Button>
      </CardActions>
    </Card>
  );
}
