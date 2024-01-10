import React from 'react';
import { Link } from 'react-router-dom';

const ListItems = ({ item }) => {
  // console.log(item);
  return (
    <div className="finalList">
      <li>
        <Link to={`/list/${item.id}`}>
          <img src={item.image} alt='dish' />
        </Link>
        <p>{item.title}</p>
        
      </li>
    </div>
  );
};

export default ListItems;
