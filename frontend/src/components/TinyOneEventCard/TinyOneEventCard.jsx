import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TinyOneEventCard = ({ el, cat }) => {
  const navigate = useNavigate();
  const openItem = () => {
    navigate(`/categories/${cat}/${el.id}`);
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

export default TinyOneEventCard;
