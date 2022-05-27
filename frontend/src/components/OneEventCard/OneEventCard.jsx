import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OneEventCard = () => {
  const { categories: list } = useSelector((state) => state.categories);
  const { el } = useParams();

  return (
    <>
      <div className="mainBox">
        <div className="headerBox">
          <p>{list[el - 1].title}</p>
          <button>Like</button>
          <button>Subscribe</button>
        </div>
        <div className="infoBox">
          Info:
          <div className="dateBox">
            Date:
            <div>{list[el - 1].date_start}</div>
            <div>{list[el - 1].date_end}</div>
          </div>
          <div className="timeBox">
            Time:
            <div>{list[el - 1].time_start}</div>
            <div>{list[el - 1].time_end}</div>
          </div>
          <div className="costBox">
            Cost:
            <div>{list[el - 1].cost}</div>
          </div>
          <div>
            People:
            <div>{list[el - 1].people_count}</div>
          </div>
          <div>
            Org Link:
            <div>{list[el - 1].org_link}</div>
          </div>
        </div>
        <div className="imageBox">{list[el - 1].image}</div>
        <div className="bodyBox">{list[el - 1].body}</div>
      </div>
    </>
  );
};

export default OneEventCard;
