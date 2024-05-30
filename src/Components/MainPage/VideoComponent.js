import './MainPage.css';
import video from './Assets/video.mp4';

function VideoComponent() {
    return (
        <div className='videoContainer'>
            <video id='bgVideo' loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoComponent;