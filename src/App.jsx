import './App.scss'
import { useState } from "react";
import { MachineSound } from "./machineSound.jsx";
import { information } from "./informationObject.js";
import freecodecampLogo from './assets/FreeCodeCamp_logo.png';


function App() {

  const [selectedSong, setSelectedSong] = useState(null);
  const [volume, setVolume] = useState(1);

  const selectedInfo = information.find(info => info.songName === selectedSong);

  return (
    <div className='machine-container'>
      <div className='grid-buttons'>
      {
        information.map( information => (
            <MachineSound 
              key={information.songName}
              songName={information.songName}
              textButton={information.textButton}
              displayedText={information.displayedText}
              isSelected={selectedSong === information.songName}
              onSelect={() => setSelectedSong(information.songName)}
              volume={volume}
            />
        ))
      }
        
      </div>
      <div className='div-information-text'>
        <figure className='figure-logo'>
          <img src={freecodecampLogo} className="logo react" alt="freecodecampLogo" />
        </figure>
        {selectedInfo && <span className='span-name-song'>{selectedInfo.displayedText}</span>}
        <input 
          type='range'
          className='input-volume'
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          
        />

      </div>
    </div>
  )
}

export default App
