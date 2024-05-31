import './MainPage.css';
import video from './Assets/video.mp4';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

function VideoComponent() {

    useLayoutEffect(() => {
        gsap.fromTo('.videoContainer', {opacity: 0}, {opacity: 0.3, duration: 2})
    }, [])

    return (
        <div className='videoContainer'>
            <video id='bgVideo' loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoComponent;