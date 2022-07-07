import { Pagination } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetchCategories } from "../../redux/thunk/asyncCategories";
import Filter from "../Filter/Filter";

import { welcomeAC } from "../../redux/actionCreators/welcomeAC";

import TinyOneEventCard from "../MaterialTinyCards/MaterialTinyCards";
import Paginations from "../Pagination/Pagination";
const Categories = () => {
  const { subscribed } = useSelector((state) => state.subscribed);

  const { categories } = useSelector((state) => state.categories);
  const { user } = useSelector((state) => state.user);
  const [filter, setFilter] = useState("date");
  const { allCategories } = useSelector((state) => state.allCategories);

  const { cat } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);
  const dispatch = useDispatch();

  const catName = allCategories?.title?.find((el) => el?.id === Number(cat));
  useEffect(() => {
    dispatch(getFetchCategories(cat, filter));
    dispatch(welcomeAC(catName?.name));
  }, [cat]);

  useEffect(() => {
    setCurrentPage(1);
  }, [cat]);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Filter />
      <div className="TinyMAINBOX">
        {categories
          ?.slice(firstCardIndex, lastCardIndex)
          .map(
            (el) => (el = <TinyOneEventCard el={el} key={el.id} cat={cat} />)
          )}
      </div>
      <Paginations
        cardsPerPage={cardsPerPage}
        total={categories.length}
        paginate={paginate}
      />
    </>
  );
};

export default Categories;
