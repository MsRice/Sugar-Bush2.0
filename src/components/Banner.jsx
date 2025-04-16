import React from 'react';
import banner_video from '../img/Copy of sugar bush video lateset.mp4'
const Banner = () => {
    return (
        <section id='Banner'> 
            <div className='banner__background--wrapper'>
                <iframe className='banner__background--video' src={banner_video}
                allow='autoplay'
                aria-controls='1'>
                    </iframe> 
            </div>
        </section>
    );
}

export default Banner;
