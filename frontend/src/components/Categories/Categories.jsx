import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allCategoriesReducer } from "../../redux/reducers/categoriesReducer";
import { useParams } from "react-router-dom";
import OneEventCard from "../OneEventCard/OneEventCard";
const Categories = () => {
  const [sta, setState] = useState(false);
  const { cat } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCategoriesReducer(cat));
  });
  let state;
  fetch("/categories/1")
    .then((res) => res.json())
    .then((data) => (state = data));
  return (
    <div>
      Categories
      <>
        <button onClick={() => setState(!sta)}>show</button>
        <OneEventCard state={state} />
      </>
    </div>
  );
};

export default Categories;
