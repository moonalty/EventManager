import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./orgModal.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getFetchCreator } from "../../../../redux/thunk/asyncCreator";
import { useSelector, useDispatch } from "react-redux";
import { creatorAC } from "../../../../redux/actionCreators/creatorAC";
import { getFetchOrgCards } from "../../../../redux/thunk/asyncOrgCards";

import { changeStateCardsReducer } from "../../../../redux/reducers/changeStateCardsReducer";

const ITEM_HEIGHT = 48;

function OrgModal({ active, setActive }, props) {
  const { allCategories } = useSelector((state) => state.allCategories);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [people, setPeople] = React.useState("");
  const [categories, setCategories] = React.useState("");

  const cardToBD = (event) => {
    event.preventDefault();

    const data = {
      user_id: user.id,
      picture: event.target.picture.value,
      title: event.target.title.value,
      categoryName: event.target.categoryName.value,
      date_start: event.target.date_start.value,
      date_end: event.target.date_end.value,
      cost: event.target.cost.value,
      adress: event.target.adress.value,
      people_count: event.target.people_count.value,
      org_link: event.target.org_link.value,
      body: event.target.body.value,
    };
    dispatch(getFetchCreator(data));
    setActive(false);
    dispatch(changeStateCardsReducer())
  };
  const categoriesChange = (event) => {
    setCategories(event.target.value);
  };
  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  return (
    <div
      className={`modal_wrapper ${active ? "open" : "close"}`}
      onClick={() => setActive()}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Card sx={{ maxWidth: 600, maxHeight: 600, overflow: "auto", display: "flex" }} className="OrgModal_content">
          <form onSubmit={cardToBD}>
            <Typography>Добавить мероприятие</Typography>
            <TextField
              required
              // type="file"
              name="picture"
              style={{ width: "400px",margin: "5px" }}
              id="outlined-required"
              label="Добавить фото"
              InputLabelProps={{ shrink: true }}
            />
            <CardContent>
              <TextField
                required
                name="title"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Название мероприятия"
              />
              <br />
              <Select
                required
                style={{ width: "400px", margin: "5px" }}
                id="demo-simple-select-helper"
                value={categories}
                displayEmpty
                placeholder="Категория мероприятия"
                onChange={categoriesChange}
                name="categoryName"
                renderValue={(selected) => {
                  console.log("SELECTED", selected);
                  if (!!!selected) {
                    return <em>Категория мероприятия</em>;
                  }
                  return selected;
                }}
              >
                {allCategories?.title?.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              <br />
              <TextField
                required
                name="date_start"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Дата начала мероприятия"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
              />
              <br />
              <TextField
                required
                name="date_end"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Дата окончания мероприятия"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
              />
              <br />
              <TextField
                required
                name="cost"
                type="number"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Стоимость"
              />
              <br />
              <TextField
                required
                name="adress"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Адрес проведения мероприятия"
              />
              <br />
              <Select
                required
                name="people_count"
                style={{ width: "400px", margin: "5px" }}
                id="demo-simple-select-helper"
                value={people}
                displayEmpty
                placeholder="Количество участников"
                onChange={handleChange}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Количество участников</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value={15}>До 15</MenuItem>
                <MenuItem value={20}>До 20</MenuItem>
                <MenuItem value={30}>До 30</MenuItem>
              </Select>
              <br />
              <TextField
                required
                name="org_link"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Ссылка на сайт организатора"
              />
              <br />
              <TextField
                required
                name="body"
                style={{ width: "400px", margin: "5px" }}
                id="outlined-required"
                label="Описание"
              />
              <br />
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button size="small" color="primary" type="submit">
                Сохранить мероприятие
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default OrgModal;
