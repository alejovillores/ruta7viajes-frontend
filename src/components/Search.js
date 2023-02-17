import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../css/Search.css'




export default function Search() {

  return (
    <div className='search-container'>
			<h2 className='search-text'>Filtros de Viaje</h2>
			<div className='search-box'>
				<TextField
					id="outlined-search" 
					label="Destino" 
					type="search"
					placeholder='La Plata'
				/>
				<TextField
					id="outlined-search" 
					type="date"
					label="Fecha de Salida"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
    </div>
  )

}