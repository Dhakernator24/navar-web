import React, { useEffect, useState } from 'react';
import image_good from '../assets/web_page_image.jpg';

function Others() {

    return (
        <div className='background'>
            <img src={image_good} className='img' alt="Company Picture" />;
        </div>
    );

}

export default Others;