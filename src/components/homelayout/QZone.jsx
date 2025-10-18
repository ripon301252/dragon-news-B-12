import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3 space-y-5'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div>
                <div><img src={swimmingImg} alt="" /></div>
            </div>
            <div>
                <div><img src={classImg } alt="" /></div>
            </div>
            <div>
                <div><img src={playImg} alt="" /></div>
            </div>
        </div>
    );
};

export default QZone;