import * as React from 'react'
import Journey from './Journey'
import '../css/JourneyContainer.css'

export default function JourneyContainer() {

    const [journeys, setJourneys] = React.useState([])

    React.useEffect(() => {
        fetch(`./journeys.test.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(response => {
            response.json()
        })
        .then(data => {
            setJourneys(data)
        })
        .catch( e => console.error(e))
    },[journeys])

    const renderJourney = () => {
        console.log(journeys)
        journeys.map((j) => {
            return (<Journey
                owner={j.owner}
                from={j.from}
                to={j.to}
                date ={j.date}
                seats={j.seats}
            />)
        })
    }

    return(
        <div className='journeys-container'>
            {renderJourney}
        </div>
    )
}