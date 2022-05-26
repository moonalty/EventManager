import React from "react";
import { useSelector } from "react-redux";

const OneEventCard = ({ el }) => {
  const { categories: list } = useSelector((state) => state.categories);
  return (
    <>
      <div className="mainBox">
        <div className="headerBox">
          <p>{el.title}</p>
          <button>Like</button>
          <button>Subscribe</button>
        </div>
        <div className="infoBox">
          Info:
          <div className="dateBox">
            Date:
            <div>{el.date_start}</div>
            <div>{el.date_end}</div>
          </div>
          <div className="timeBox">
            Time:
            <div>{el.time_start}</div>
            <div>{el.time_end}</div>
          </div>
          <div className="costBox">
            Cost:
            <div>{el.cost}</div>
          </div>
          <div>
            People:
            <div>{el.people_count}</div>
          </div>
          <div>
            Org Link:
            <div>{el.org_link}</div>
          </div>
        </div>
        <div className="imageBox">{el.image}</div>
        <div className="bodyBox">{el.body}</div>
      </div>
    </>
  );
};

export default OneEventCard;
