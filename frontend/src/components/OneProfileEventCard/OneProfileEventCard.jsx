import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFetchOneCategory } from "../../redux/thunk/asyncCategories";

const OneProfileEventCard = () => {
  const navigator = useNavigate();
  const { oneCategory: oneCat } = useSelector((state) => state.oneCategory);
  const { id } = useParams();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchOneCategory(id));
  }, [dispatch]);
  const likeButton = () => {
    navigator(-1);
  };
  return (
    <>
      <div className="mainBox">
        <p>{oneCat.title}</p>
        <div className="headerBox">
          <img className="imageBox" src={oneCat.image} alt="#" />

          <button onClick={likeButton}>Like</button>
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
        <div className="bodyBox">{oneCat.body}</div>
      </div>
    </>
  );
};

export default OneProfileEventCard;
