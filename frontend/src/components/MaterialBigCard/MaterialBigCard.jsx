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
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";

const OneEventCard = () => {
  const navigator = useNavigate();
  const { oneCategory: oneCat } = useSelector((state) => state.oneCategory);
  const { user } = useSelector((state) => state.user);
  // console.log("USER>>>>>>>>>>>", user);
  // console.log("oneCAT>>>>>>>", oneCat);
  const { subscribed } = useSelector((state) => state.subscribed);
  const { allCategories } = useSelector(state => state.allCategories)
  // const { rate } = useSelector((state) => state.rate);
  const [subState, setSubState] = React.useState(true);
  // console.log(catName.name)
  // console.log("SUBSTATE>>>>", subState);
  const { el, cat } = useParams();
  const catName = allCategories?.title.find(el => el?.id === Number(cat));
  React.useEffect(() => {
    dispatch(welcomeAC(catName.name))
  }, [cat])
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFetchCheckRate(+el));
    dispatch(getFetchOneCategory(el));
    const finder = subscribed.find((ele) => ele[0].id === +el);
    if (finder) setSubState(!subState);
  }, [el]);
  const subscribe = () => {
    if(user?.id) {
    dispatch(getFetchSubscribe(cat, el));
      navigator(-1)
    }
  };
  const setRate = (e) => {
    e.preventDefault();
    const rate = e.target.innerText;
    dispatch(getFetchRate(+el, rate));
  };
  const deleteCard = () => {
    dispatch(deleteCardFetch(+el));
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
          Мероприятия рассчитано на: {oneCat.people_count} человек
        </Typography>
        <Typography>
          Стоимость билета: 
          {oneCat.cost} рублей
        </Typography>
      </CardContent>
      <CardActions>
        {user.id === oneCat.user_id ? (
          <Button onClick={deleteCard}>Удалить</Button>
        ) : (
          <Button size="small">Купить билет</Button>
        )}

        {(subState&&user?.role==='Пользователь') && (
          <Button onClick={subscribe} size="small">
            Добавить в избранное
          </Button>
        )}
      </CardActions>
      <div>
        <RatingSystem setRate={setRate} />
      </div>
    </Card>
  );
};

export default OneEventCard;
