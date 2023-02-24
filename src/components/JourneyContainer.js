import * as React from 'react'
import Journey from './Journey'
import '../css/JourneyContainer.css'

export default function JourneyContainer() {
    return(
        <div className='journeys-container'>
            <Journey
                owner={'Juan'}
                from={'Junin'}
                to={'Buenos Aires'}
                date ={'21-02-2023'}
                seats={4}
            />
            <Journey 
                owner={'Jose'}
                to={'Junin'}
                from={'Buenos Aires'}
                date ={'19-02-2023'}
                seats={2}/> 
            
            <Journey 
                owner={'Alejo'}
                from={'Junin'}
                to={'La Plata'}
                date ={'1-03-2023'}
                seats={3}/>

        </div>
    )
}