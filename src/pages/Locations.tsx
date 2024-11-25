import axios from 'axios'
import { useState, useEffect } from 'react'
import './Style.css'

const Locations = () => {
  const [locations, setLocations] = useState<any[]>([])

  const fetchLocations = () => {
    axios
      .get("https://eldenring.fanapis.com/api/locations?limit=70")
      .then((response) => {setLocations(response.data.data)})
    }

  useEffect(() => {fetchLocations()}, [])

  return (
    <div className="container">
      <h1 className='location-title' >Locais de Elden Ring</h1>
      {locations.length > 0 ? (
        <div className="locations-list">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h2 className="location-name">{location.name}</h2>
              <div className="location-description">
                {location.description
                  ? location.description.split('. ').map((paragraph: string, i: number) => (
                      paragraph && <p key={i} className="description-paragraph">{paragraph}{i < location.description.split('. ').length - 1 ? '.' : ''}</p>
                    ))
                  : <p className="description-paragraph">No description available.</p>
                }
              </div>
              <img src={location.image} alt={location.name} className="location-card-image"
                style={{ width: "400px", height: "400px", paddingBottom: "80px" }}/>
            </div>
          ))}
        </div>
      ) : (<p>Carregando locais...</p>)}
    </div>
  )
}

export default Locations