import React from "react";
import {Link} from "react-router";

const Menu = (props) => {
    const {collection} = props;
  return (
      <li className='item'>
          <Link to={`/collection/${collection.id}`} className='link'>{collection.title}</Link>
      </li>
  )
};

export default Menu;