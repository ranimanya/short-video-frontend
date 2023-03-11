import React, {useState} from 'react'
import './VideoSidebar.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({likes, shares, comments}) => {
    const [liked, setLiked] = useState(false)
    return (
    <div className='videoSidebar'>
        <div className='videoSidebar__button'>
            {liked ? <ThumbUpAltIcon fontSize="large" onClick={e => setLiked(false)} /> : 
                     <ThumbUpOffAltIcon fontSize="large" onClick={e => setLiked(true)} /> }
            <p>{liked ? likes+1 : likes}</p>
        </div>
        <div className='videoSidebar__button'>
            <CommentIcon fontSize="large" />
            <p>{comments}</p>
        </div>
        <div className='videoSidebar__button'>
            <ShareIcon fontSize="large" />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar