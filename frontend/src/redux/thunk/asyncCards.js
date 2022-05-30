import {
  cardsAllRenderAC,
  cardsDeleteAC,
  cardsSearchRenderAC,
} from "../actionCreators/cardsAC";

export const getFetchAllCards = () => {
  return (dispatch) => {
    fetch("/cards")
      .then((response) => response.json())
      .then((data) => dispatch(cardsAllRenderAC(data)));
  };
};

export const postFetchSerchCards = (val) => {
  // console.log(val);
  return (dispatch) => {
    fetch("/cards", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ val }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(cardsSearchRenderAC(data)));
  };
};

export const deleteSubFetch = (id) => {
  return (dispatch) => {
    fetch("/subscribe", {
      headers: { "content-type": "application/json" },
      method: "delete",
      body: JSON.stringify({ id }),
    }).then((res) => res.json());
    // .then((data) => dispatch(cardsDeleteAC(data)));
  };
};

export const deleteCardFetch = (el) => {
  // console.log('EL>>>>>>>>',el);
  return (dispatch) => {
    fetch("/cards", {
      headers: { "content-type": "application/json" },
      method: "delete",
      body: JSON.stringify({ el }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(cardsDeleteAC(data)));
  };
};
