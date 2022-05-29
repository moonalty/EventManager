import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetchCategories } from "../../redux/thunk/asyncCategories";
import { getFetchSubs } from "../../redux/thunk/asyncSubscribes";
// import TinyOneEventCard from "../TinyOneEventCard/TinyOneEventCard"; //OLD CARDS
import TinyOneEventCard from "../MaterialTinyCards/MaterialTinyCards";
const Categories = () => {
  const { subscribed } = useSelector((state) => state.subscribed);
  console.log(",SUBS2>>>>>>>>>>>>>", subscribed);
  const { categories: list } = useSelector((state) => state.categories);
  const { cat } = useParams();
  const dispatch = useDispatch();
  // console.log('//////',list);
  useEffect(() => {
    dispatch(getFetchCategories(cat));
    dispatch(getFetchSubs());
  }, []);
  // console.log(cat);
  return (
    <div>
      Categories
      {/* <>{list.map((el) => (el = <OneEventCard key={el.id} el={el} />))}</> */}
      {list.map(
        (el) => (el = <TinyOneEventCard el={el} key={el.id} cat={cat} />)
      )}
    </div>
  );
};

export default Categories;
