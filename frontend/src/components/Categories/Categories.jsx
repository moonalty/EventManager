import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import OneEventCard from "../OneEventCard/OneEventCard";
import { getFetchCategories } from "../../redux/thunk/asyncCategories";
import TinyOneEventCard from "../TinyOneEventCard/TinyOneEventCard";
const Categories = () => {
  const { categories: list } = useSelector((state) => state.categories);
  const { cat } = useParams();
  const dispatch = useDispatch();
  // console.log('//////',list);
  useEffect(() => {
    dispatch(getFetchCategories(cat));
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
