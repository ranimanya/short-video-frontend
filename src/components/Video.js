import React, {useRef, useState} from 'react'
import VideoFooter from './VideoFooter'
import './Video.css'
import VideoSidebar from './VideoSidebar'

const Video = ({url, channel, description, song, likes, shares, comments}) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const handleVideoPress = () => {
    if(playing){
      videoRef.current.pause()
      setPlaying(false)
    }
    else {
      videoRef.current.play()
      setPlaying(true)
    }
  }
  
  return (
    <div className='video' >
        <video className='video__player' 
               src={url} 
               type="video/webm" 
               loop 
               ref = {videoRef} 
               onClick = {handleVideoPress}>
        </video>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} shares={shares} comments={comments} />
    </div>
  )
}

export default Video