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
        Дата мероприятия: 
        {el.date_start}
      </div>
      <div className="tinyBoxCost">
        Стоимость: {el.cost} рублей
      </div>
    </div>
  );
};

export default TinyProfileEventCard;
