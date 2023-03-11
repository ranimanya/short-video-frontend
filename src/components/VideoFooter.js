import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'


const VideoFooter = ({channel, description, song}) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter__ticker'>
              <MusicNoteIcon className='videoFooter__icon' />
              <Ticker>
                {({ index }) => (
                <>
                <p>{song}</p>
                </>
                )}
                </Ticker>
            </div>
        </div>
        <img className='videoFooter__record' src='https://pngimg.com/uploads/compact_disc/compact_disc_PNG102162.png' alt='video footer'/>
    </div>
  )
}

export default VideoFooter