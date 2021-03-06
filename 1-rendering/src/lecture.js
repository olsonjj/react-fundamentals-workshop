import React from 'react'
import ReactDOM from 'react-dom'

let tacos = [
  { name: 'Carnitas', stars: 5 },
  { name: 'Pollo', stars: 3 },
  { name: 'Carne Asada', stars: 4 },
  { name: 'Al Carbon', stars: 3 },
  { name: 'Mole', stars: 5 }
]

ReactDOM.render(
  <div>
    <h1>Welcome to React!</h1>
    <ul>
      {tacos
        .sort((a, b) => b.stars - a.stars)
        .map(taco => (
          <li style={{ margin: '10px' }}>
            <button onClick={() => alert(taco.name + ' is my favorite!')}>
              +1
            </button>{' '}
            {Array.from({ length: taco.stars }).map(() => '★')}
            {Array.from({ length: 5 - taco.stars }).map(() => '☆')} {taco.name}
          </li>
        ))}
    </ul>
  </div>,
  document.getElementById('root')
)
