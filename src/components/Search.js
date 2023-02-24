import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Search.css'
export default function Search() {

  return (
    <div className='search-container'>
		<div className='search-box'>
			<h2 className='search-text'>Filtros de Viaje</h2>
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
			<button className='search-button'>
				<SearchIcon/>
			</button>
		</div>
    </div>
  )

}