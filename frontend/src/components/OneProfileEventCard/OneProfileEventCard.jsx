import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFetchOneCategory } from "../../redux/thunk/asyncCategories";
import { getFetchRate } from "../../redux/thunk/asyncRate";
import RatingSystem from "../RatingSystem/RatingSystem";

const OneProfileEventCard = () => {
  const { el } = useParams();
  const navigator = useNavigate();
  const { oneCategory: oneCat } = useSelector((state) => state.oneCategory);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchOneCategory(id));
  }, [dispatch]);
  const setRate = (e) => {
    e.preventDefault();
    const rate = e.target.innerText;
    dispatch(getFetchRate(+el, rate));
  };
  return (
    <>
      <div className="mainBox">
        <div className="titleBox">
          <p className="titleP">{oneCat.title}</p>
        </div>
        <div className="headerBox">
          <img className="imageBox" src={oneCat.image} alt="#" />
        </div>
        <div className="infoBox">
          Информация о событии:
          <div className="dateBox">
            <div className="infosDiv">Дата начала: {oneCat.date_start}</div>

            <div className="infosDiv">Дата окончания: {oneCat.date_end}</div>
          </div>
          <div className="timeBox">
            <div className="infosDiv">Начало в: {oneCat.time_start}</div>
            <div className="infosDiv">Закончится: {oneCat.time_end}</div>
          </div>
          <div className="costBox">
            <div className="infosDiv">
              Стоимость входа: {oneCat.cost} рублей
            </div>
          </div>
          <div>
            <div className="infosDiv">
              Максимальное количество человек на мероприятии:{" "}
              {oneCat.people_count}
            </div>
          </div>
          <div>
            <div className="infosDiv">
              Ссылка на организатора:
              <a href={oneCat.org_link}>{oneCat.org_link}</a>
            </div>
          </div>
        </div>
        <div className="bodyBox">{oneCat.body}</div>
        <div className="subAndRateBox">
          <button
            className="subButton"
            // onClick={alert("Функция временно недоступна")}
          >
            Купить билет
          </button>
          <RatingSystem setRate={setRate} />
        </div>
      </div>
    </>
  );
};

export default OneProfileEventCard;
