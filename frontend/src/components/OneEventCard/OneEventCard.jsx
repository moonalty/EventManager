import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetchOneCategory } from "../../redux/thunk/asyncCategories";

const OneEventCard = () => {
  const { oneCategory: oneCat } = useSelector((state) => state.oneCategory);
  const { cat, el } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchOneCategory(el, cat));
  }, [dispatch]);
  return (
    <>
      <div className="mainBox">
        <div className="headerBox">
          <p>{oneCat.title}</p>
          <button>Like</button>
          <button>Subscribe</button>
        </div>
        <div className="infoBox">
          Info:
          <div className="dateBox">
            Date:
            <div>{oneCat.date_start}</div>
            <div>{oneCat.date_end}</div>
          </div>
          <div className="timeBox">
            Time:
            <div>{oneCat.time_start}</div>
            <div>{oneCat.time_end}</div>
          </div>
          <div className="costBox">
            Cost:
            <div>{oneCat.cost}</div>
          </div>
          <div>
            People:
            <div>{oneCat.people_count}</div>
          </div>
          <div>
            Org Link:
            <div>{oneCat.org_link}</div>
          </div>
        </div>
        <div className="imageBox">{oneCat.image}</div>
        <div className="bodyBox">{oneCat.body}</div>
      </div>
    </>
  );
};

export default OneEventCard;
