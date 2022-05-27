import React from "react";
import { useNavigate } from "react-router-dom";

const TinyProfileEventCard = ({ el, cat }) => {
  const navigate = useNavigate();
  const openItem = () => {
    navigate(`/profile/${el.id}`);
  };
  return (
    <div className="tinyMainbox" onClick={openItem}>
      <div className="tinyBoxTitle">{el.title}</div>
      <img src={el.image} alt="#" className="tinyBoxImage"></img>
      <div className="tinyBoxDate">
        {el.date_start}---{el.date_end}
      </div>
      <div className="tinyBoxTime">
        {el.time_start}---
        {el.time_end}
      </div>
    </div>
  );
};

export default TinyProfileEventCard;
