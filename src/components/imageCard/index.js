import React from 'react';
const ImageCard = (props) => {
    const { image } = props;
    return(
        <div className='images-grid__item'>
            <img src={image.urls.small} className="image" alt={image.alt_description} />
        </div>
    )
};

export default  ImageCard;