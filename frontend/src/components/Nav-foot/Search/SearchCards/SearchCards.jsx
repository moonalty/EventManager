import React from 'react';
import { useSelector } from 'react-redux';

function SearchCards(props) {
  const { search } = useSelector(state => state.search)
  console.log(search);
  return (
    <div>
      {search?.data?.map(el=><div>{el.title}</div>)}
    </div>
  );
}

export default SearchCards;
