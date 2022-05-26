import React from "react";

const OneEventCard = ({ state }) => {
  return (
    <>
      <div className="mainBox">
        <div className="headerBox">
          <p>{state.title}</p>
          <button>Like</button>
          <button>Subscribe</button>
        </div>
        <div className="infoBox">
          Info:
          <div className="dateBox">
            Date:
            <div>{state.date_start}</div>
            <div>{state.date_end}</div>
          </div>
          <div className="timeBox">
            Time:
            <div>{state.time_start}</div>
            <div>{state.time_end}</div>
          </div>
          <div className="costBox">
            Cost:
            <div>{state.cost}</div>
          </div>
          <div>
            People:
            <div>{state.people_count}</div>
          </div>
          <div>
            Org Link:
            <div>{state.org_link}</div>
          </div>
        </div>
        <div className="imageBox">{state.image}</div>
        <div className="bodyBox">{state.body}</div>
      </div>
    </>
  );
};

export default OneEventCard;
