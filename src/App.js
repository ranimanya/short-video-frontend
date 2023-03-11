import React from 'react'
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <Video url="https://upload.wikimedia.org/wikipedia/commons/c/cd/Common_Kingfisher_preening.webm" 
        channel="@ranimanya"
        description=" Beautiful Kingfisher bird "
        song=" Nature-is-serene "
        likes={789}
        shares={346}
        comments={152}
        />
        <Video url="https://upload.wikimedia.org/wikipedia/commons/4/40/Sunrise_atLake_Bled.webm" 
        channel="@ranimanya"
        description=" Sunrise time lapse "
        song=" Rise-and-shine "
        likes={735}
        shares={390}
        comments={167}
        />
      </div>
    </div>
  );
}

export default App;
