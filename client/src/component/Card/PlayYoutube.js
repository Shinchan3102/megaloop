import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import YouTube from 'react-youtube';

const PlayYoutube = ({ id, setYoutube }) => {
    return (
        <div className='youtube-container'>
            <div className='youtube-sub-container'>
                <RxCross2 className='crossIcon' style={{color:'white',fontWeight:'bold',fontSize:'20px'}} onClick={()=>setYoutube({mode:false,id:null})} />
                <YouTube videoId={id} opts={{
                    height: '200',
                    width: '340', playerVars: {
                        autoplay: 1
                    }
                }} />
            </div>
        </div>
    )
}

export default PlayYoutube
