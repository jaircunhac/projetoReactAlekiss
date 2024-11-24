import axios from 'axios'
import { useState, useEffect } from 'react'
import './Locations.css'

const Locations = () => {
  const [locations, setLocations] = useState<any[]>([])

  const fetchLocations = () => {
    axios
      .get("https://eldenring.fanapis.com/api/locations")
      .then((response) => {setLocations(response.data.data)})
    }

  useEffect(() => {fetchLocations()}, [])

  return (
    <div className="container">
      <h1>Locais de Elden Ring</h1>
      {locations.length > 0 ? (
        <div className="locations-list">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h2>{location.name}</h2>
              <p>{location.description}</p>
                <img
                  src={location.image}
                  alt={location.name}
                  style={{ width: "400px", height: "400px", paddingBottom: "80px" }}
                />
            </div>
          ))}
        </div>
      ) : (<p>Carregando locais...</p>)}
    </div>
  )
}

export default Locations