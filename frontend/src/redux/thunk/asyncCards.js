import { cardsAllRenderAC, cardsSearchRenderAC } from "../actionCreators/cardsAC";

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
        body: JSON.stringify({val})
      })
        .then((response) => response.json())
        .then((data) => dispatch(cardsSearchRenderAC(data)));
    };
}
