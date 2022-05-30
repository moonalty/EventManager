import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFetchOneCategory,
  getFetchSubscribe,
} from "../../redux/thunk/asyncCategories";
import { getFetchCheckRate, getFetchRate } from "../../redux/thunk/asyncRate";
import RatingSystem from "../RatingSystem/RatingSystem";
import { deleteCardFetch } from "../../redux/thunk/asyncCards";

const OneProfileEventCard = () => {
  const { el } = useParams();
  const navigator = useNavigate();
  const { oneCategory: oneCat } = useSelector((state) => state.oneCategory);
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFetchOneCategory(id));
  }, [dispatch]);
  const setRate = (e) => {
    e.preventDefault();
    const rate = e.target.innerText;
    dispatch(getFetchRate(+el, rate));
  };
  const deleteItem = () => {
    dispatch(deleteCardFetch(+id));
    navigator(-1);
  };

  return (
    <Card className="materialBigMainBox" sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="420" image={oneCat.image} alt="#" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {oneCat.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneCat.body}
        </Typography>
        <Typography>
          Проводится с: {oneCat.date_start}
          <br />
          До: {oneCat.date_end}
        </Typography>
        <Typography>
          Начало в: {oneCat.time_start}
          <br />
          Заканчивается: {oneCat.time_end}
        </Typography>
        <Typography>
          Мероприятия рассчитано на -{oneCat.people_count} человек
        </Typography>
        <Typography>
          Стоимость билета:
          {oneCat.cost} рублей
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Купить билет</Button>
        <Button onClick={deleteItem}>Перестать отслеживать</Button>
      </CardActions>
      <div>
        <RatingSystem setRate={setRate} />
      </div>
    </Card>
  );
};

export default OneProfileEventCard;
