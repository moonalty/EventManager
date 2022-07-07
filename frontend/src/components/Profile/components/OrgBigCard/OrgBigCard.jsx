import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function OrgBigCard({ el }) {
  const navigate = useNavigate();
  const openItem = () => {
    navigate(`/profile/${el?.id}`);
  };
  return (
    <div className="materialMainBox">
      <Card sx={{ maxWidth: 245 }}>
        <CardMedia component="img" height="340" image={el?.image} alt="#" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дата мероприятия:
            {el?.date_start}
          </Typography>
          <Typography>
            Стоимость мероприятия:
            {el?.cost} рублей
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
}

export default OrgBigCard;
