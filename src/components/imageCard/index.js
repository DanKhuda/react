import React from 'react';
import {Link} from "react-router";
import PropTypes from "prop-types";

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

ImageCard.propTypes = {
    image: PropTypes.shape({
        urls: PropTypes.shape({
            small: PropTypes.string
        }),
        alt_description: PropTypes.string,
        id: PropTypes.number
    }).isRequired
};

ImageCard.defaultProps = {
    image: {
        id: 'id',
        alt_description: 'description',
        urls:{
            small: 'image.jpg'
        }
    }
};

export default  ImageCard;