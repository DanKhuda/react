import React from 'react';
import {Link} from "react-router";

const ImageCard = (props) => {
    const { image } = props;
    return(
        <div className='images-grid__item'>
            <Link to={`image/${image.id}`} className={'images-grid__link'}>
                <img src={image.urls.small} className="image" alt={image.alt_description} />
            </Link>
        </div>
    )
};

export default  ImageCard;