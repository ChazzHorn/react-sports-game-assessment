import React from 'react';
import './App.css';
import Raccoons from './assets/images/raccoon.png'
import Bunnies from './assets/images/bunny.png'
import Hounds from './assets/images/squirrel.png'
import Squirrels from './assets/images/hound.png'
import Game from './components/game/Game'

function App() {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoons
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrels
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunnies
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Hounds
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
