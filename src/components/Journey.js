import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Journey({owner,from, to, date,seats}) {
  return (
    <Card sx={{ width: 275, height:200, margin:1 }}>
      <CardContent>
        <Typography variant='subtitle1'>
            {owner} viaja!
        </Typography>

        <Typography variant="body2">
            <p>Desde <strong>{from}</strong></p>
            <p>A <strong>{to}</strong></p>
            <p>Fecha:  <strong>{date}</strong></p>
            <p>Asientos disponibles <strong>{seats}</strong></p>
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button variant='contained' size="small">Sumarme</Button>
      </CardActions>
    </Card>
  );
}
