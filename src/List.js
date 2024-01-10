import React from 'react';
import ListItems from './ListItems';

const List = ({ items,isLoading}) => {
  if (!items || items.length === 0) {
    console.log('No items to display.');
    return null;
  }
  console.log(items)

  return (
    <div className="itemsContainer">
      {isLoading ? (
  <p className='statusMsg'>Data Loading...</p>
) : (
  <ul id='itemContainer'>
    {items.map((item) => (
      <li key={item.id}>
        <ListItems item={item} />
      </li>
    ))}
  </ul>
)}
    </div>
  );
};

export default List;
