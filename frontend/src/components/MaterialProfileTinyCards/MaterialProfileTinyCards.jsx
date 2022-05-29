import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const TinyProfileEventCard = ({ el, cat }) => {
  const navigate = useNavigate();
  const openItem = () => {
    navigate(`/profile/${el.id}`);
  };
  return (
    <div className="materialMainBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="340" image={el.image} alt="#" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата мероприятия:
            {el.date_start}
          </Typography>
          <Typography>
            Стоимость мероприятия:
            {el.cost} рублей
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" onClick={openItem}>
            Подробнее
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default TinyProfileEventCard;
