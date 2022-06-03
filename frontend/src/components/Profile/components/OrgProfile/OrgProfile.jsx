import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  CardActions,
  CardMedia,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import OrgModal from "../OrgModal/OrgModal";
import { useSelector, useDispatch } from "react-redux";
import { getFetchCreator } from "../../../../redux/thunk/asyncCreator";
import { getFetchOrgCards } from "../../../../redux/thunk/asyncOrgCards";
import { useNavigate } from "react-router-dom";
import { deleteCardFetch } from "../../../../redux/thunk/asyncCards";

export default function OrgProfile() {
  const { orgCards } = useSelector((state) => state.orgCards);
  const navigate = useNavigate();
  console.log("ORG>>>>", orgCards);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFetchOrgCards());
  }, [dispatch]);
  const deleteCard = (id) => {
    dispatch(deleteCardFetch(id));
    dispatch(getFetchOrgCards());
    
  };
  const [orgModalActive, setOrgModalActive] = React.useState(false);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => setOrgModalActive(true)}
            >
              Добавить мероприятие
            </Button>
            <OrgModal
              active={orgModalActive}
              setActive={() => setOrgModalActive(false)}
            />
            <ImageList
              sx={{ width: 1080, height: 863 }}
              variant="woven"
              cols={3}
              gap={8}
            >
              {orgCards?.map((item) => (
                <div className="materialMainBox">
                  <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                      component="img"
                      height="340"
                      image={item?.image}
                      alt="#"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Дата мероприятия:
                        {item?.date_start}
                      </Typography>
                      <Typography>
                        Стоимость мероприятия:
                        {item?.cost} рублей
                      </Typography>
                    </CardContent>
                    <Button onClick={() => deleteCard(item.id)}>Удалить</Button>
                  </Card>
                </div>
              ))}
            </ImageList>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
    //   <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
    //   {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fb9pVwy2gp232EnXGqKtjSWVD_34DLmOOQ&usqp=CAU' /> */}
    //   {creators?.map((item) => (
    // <div className="materialMainBox">
    // <Card sx={{ maxWidth: 345 }}>
    // <CardMedia component="img" height="340" image={item?.image} alt="#" />
    // <CardContent>
    // <Typography gutterBottom variant="h5" component="div">
    // {item?.title}
    // </Typography>
    // <Typography variant="body2" color="text.secondary">
    // Дата мероприятия:
    // {item?.date_start}
    // </Typography>
    // <Typography>
    // Стоимость мероприятия:
    // {item?.cost} рублей
    // </Typography>
    // </CardContent>
    // <CardActions>
    // {/* <Button size="small">Share</Button> */}
    // <Button size="small" >
    // Подробнее
    // </Button>
    // </CardActions>
    // </Card>
    // </div>
    // ))}
    // </ImageList>
  );
}
