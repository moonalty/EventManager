import { Pagination } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetchCategories } from "../../redux/thunk/asyncCategories";
import Filter from "../Filter/Filter";
import TinyOneEventCard from "../MaterialTinyCards/MaterialTinyCards";
import Paginations from "../Pagination/Pagination";
const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const { cat } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchCategories(cat));
  }, [cat]);
  useEffect(() => {
    setCurrentPage(1);
  }, [cat]);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCard = categories.slice(firstCardIndex, lastCardIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Filter />
      <div className="TinyMAINBOX">
        {currentCard.map(
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
