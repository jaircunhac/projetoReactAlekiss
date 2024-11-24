import axios from 'axios';
import { useState } from 'react';
import './Style.css'


const Bosses = () => {
  const [boss, setBoss] = useState<any>(null)

  const fetchRandomBoss = () => {
    axios
      .get("https://eldenring.fanapis.com/api/bosses?limit=70")
      .then((response) => {const bosses = response.data.data
        const randomBoss = bosses[Math.floor(Math.random() * bosses.length)]
        setBoss(randomBoss)})
  }

  return (
    <div className="container">
      <h1>Boss Aleatório de Elden Ring</h1>
      <button onClick={fetchRandomBoss}>Mostrar um sofrimento aleatório</button>
      
      {boss && (
        <div className="boss-info">
          <h2>{boss.name}</h2>
          <p>{boss.description}</p>
          {boss.image && (
            <img
              src={boss.image}
              alt={boss.name}
              style={{ width: "200px", height: "auto" }}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Bosses;
