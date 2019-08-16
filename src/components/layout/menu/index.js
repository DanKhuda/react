import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";
import ImageCard from "../../imageCard";

const Menu = (props) => {
    const {collection} = props;
  return (
      <li className='item'>
          <Link to={`/collection/${collection.id}`} className='link'>{collection.title}</Link>
      </li>
  )
};

ImageCard.propTypes = {
    collection: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string
    })
};

ImageCard.defaultProps = {
    image: {
        id: '1',
        title: 'title'
    }
};

export default Menu;