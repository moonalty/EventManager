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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './MaterialBigCard.css'

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
  const catName = allCategories?.title?.find(el => el?.id === Number(cat));
  React.useEffect(() => {
    dispatch(welcomeAC(catName?.name))
  }, [cat])
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFetchCheckRate(+el));
    dispatch(getFetchOneCategory(el));
    const finder = subscribed?.find((ele) => ele[0].id === +el);
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
  // console.log(oneCat);
  return (
    <div className="bigCard">
      <ArrowBackIcon style={{ color: 'black', width: 40, height: 40, cursor: 'w-resize' }} onClick={() => navigator(-1)}/>
    <Card className="materialBigMainBox" sx={{ width: 360, }}>
      <CardMedia component="img" height="420" image={oneCat.image} alt="#" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {oneCat.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneCat.body}
        </Typography>
        <Typography>
          ???????????????????? ??: {oneCat.date_start}
          <br />
          ????: {oneCat.date_end}
        </Typography>
        <Typography>
          ?????????????????????? ???????????????????? ????: {oneCat.people_count} ??????????????
        </Typography>
        <Typography>
          ?????????????????? ????????????: 
          {oneCat.cost} ????????????
        </Typography>
      </CardContent>
      <CardActions>
        {user.id === oneCat.user_id ? (
          <Button onClick={deleteCard}>??????????????</Button>
        ) : (
            <Button size="small" ><a href={oneCat?.org_link} target="_blank">???????????? ??????????</a></Button>
        )}

        {(subState&&user?.role==='????????????????????????') && (
          <Button onClick={subscribe} size="small">
            ???????????????? ?? ??????????????????
          </Button>
        )}
      </CardActions>
      <div>
        <RatingSystem setRate={setRate} />
      </div>
    </Card>
    </div>
  );
};

export default OneEventCard;
