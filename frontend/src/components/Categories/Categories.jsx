import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OneEventCard from "../OneEventCard/OneEventCard";
import { getFetchCategories } from "../../redux/thunk/asyncCategories";
const Categories = () => {
  const { categories: list } = useSelector((state) => state.categories);
  console.log("LIST>>>", list);
  const { cat } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchCategories(cat));
  }, []);
  return (
    <div>
      Categories
      <>{list.map((el) => (el = <OneEventCard key={el.id} el={el} />))}</>
    </div>
  );
};

export default Categories;
