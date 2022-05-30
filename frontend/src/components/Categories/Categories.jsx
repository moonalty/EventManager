import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetchCategories } from "../../redux/thunk/asyncCategories";
import { getFetchSubs } from "../../redux/thunk/asyncSubscribes";
import Filter from "../Filter/Filter";
// import TinyOneEventCard from "../TinyOneEventCard/TinyOneEventCard"; //OLD CARDS
import TinyOneEventCard from "../MaterialTinyCards/MaterialTinyCards";
const Categories = () => {
  const { subscribed } = useSelector((state) => state.subscribed);
  const { categories } = useSelector((state) => state.categories);
  const [filter,setFilter] = useState('date')
  const { cat } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchCategories(cat, filter));
    // dispatch(getFetchSubs());
  }, [cat, filter]);
  console.log(filter);
  return (
    <>
      <Filter filter={filter} setFilter={setFilter}/>
    <div className="TinyMAINBOX">
      {/* <>{list.map((el) => (el = <OneEventCard key={el.id} el={el} />))}</> */}
      {categories.map(
        (el) => (el = <TinyOneEventCard el={el} key={el.id} cat={cat} />)
      )}
    </div>
    </>
  );
};

export default Categories;
