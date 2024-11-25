import axios from 'axios';
import { useState } from 'react';
import './Style.css'


const Bosses = () => {
  const [boss, setBoss] = useState<any>(null)

  const fetchRandomBoss = () => {
    axios
      .get("https://eldenring.fanapis.com/api/bosses?limit=720")
      .then((response) => {const bosses = response.data.data
        const randomBoss = bosses[Math.floor(Math.random() * bosses.length)]
        setBoss(randomBoss)})
  }

  return (
    <div className="container">
      <h1 className="boss-title">Boss Aleatório de Elden Ring</h1>
      <button 
        className="boss-button" 
        onClick={fetchRandomBoss}
      >
        Mostrar um sofrimento aleatório
      </button>
      
      {boss && (
        <div className="boss-info">
          <h2 className="boss-name">{boss.name}</h2>
          <div className="boss-description">
            {boss.description
              ? boss.description.split('. ').map((paragraph: string, i: number) => (
                  paragraph && (
                    <p key={i} className="description-paragraph">
                      {paragraph}{i < boss.description.split('. ').length - 1 ? '.' : ''}
                    </p>
                  )
                ))
              : <p className="description-paragraph">No description available.</p>
            }
          </div>
          {boss.image && (
            <img 
              src={boss.image} 
              alt={boss.name}
              className="boss-image"
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Bosses;
