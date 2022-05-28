import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFetchOneCategory,
  getFetchSubscribe,
} from "../../redux/thunk/asyncCategories";
import { getFetchCheckRate, getFetchRate } from "../../redux/thunk/asyncRate";
import RatingSystem from "../RatingSystem/RatingSystem";

const OneEventCard = () => {
  const navigator = useNavigate();
  const { oneCategory: oneCat } = useSelector((state) => state.oneCategory);
  const { subscribed } = useSelector((state) => state.subscribed);
  const { rate } = useSelector((state) => state.rate);
  const [subState, setSubState] = useState(true);
  const { el, cat } = useParams();
  const dispatch = useDispatch();
  // console.log("CAT+EL>>>>>", typeof +el);
  // const { currentRate } = useSelector((state) => state.currentRate);
  useEffect(() => {
    // console.log(rate);
    dispatch(getFetchCheckRate(+el));
    dispatch(getFetchOneCategory(el));
    const finder = subscribed.find((ele) => ele[0].id === +el);
    if (finder) setSubState(!subState);
  }, [dispatch]);
  const subscribe = () => {
    dispatch(getFetchSubscribe(cat, el));
    navigator(-1);
  };
  const setRate = (e) => {
    e.preventDefault();
    const rate = e.target.innerText;
    console.log(e.target.innerText);
    dispatch(getFetchRate(+el, rate));
  };
  return (
    <>
      <div className="mainBox">
        <p>{oneCat.title}</p>
        <div className="headerBox">
          <img className="imageBox" src={oneCat.image} alt="#" />

          <button>Like</button>
          <RatingSystem setRate={setRate} />
          {subState && <button onClick={subscribe}>Subscribe</button>}
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

export default OneEventCard;
