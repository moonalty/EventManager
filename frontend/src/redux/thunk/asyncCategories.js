import {
  oneCategoryRenderAC,
  showCategories,
} from "../actionCreators/categoriesAC";
import { categoriesAllRenderAC } from "../actionCreators/categoriesAC";

export const getFetchCategories = (cat, filter) => {
  return (dispatch) => {
    fetch(`/categories/${cat}`, {
                headers: { "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ cat, filter }),
              })
      .then((response) => response.json())
      .then((data) => dispatch(showCategories(data)));
  };
};

export const getFetchAllCategories = () => {
  return (dispatch) => {
    fetch("/title")
      .then((response) => response.json())
      .then((data) => dispatch(categoriesAllRenderAC(data)));
  };
};

// export const delFetchTasks = (id) => {

export const getFetchOneCategory = (cat, el) => {
  return (dispatch) => {
    fetch(`/categories/${cat}/${el}`)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => dispatch(oneCategoryRenderAC(data)));
  };
};

export const getFetchSubscribe = (cat, el) => {
  return (dispatch) => {
    fetch(`/subscribe/${el}`)
      .then((response) => response.json())
      // .then((data) => console.log('STATUS>>>>',data));
      .then((data) =>
        data.message === "exist"
          ? alert("Вы уже подписались на это мероприятие!")
          : data
      );
  };
};
// export const getFetchDeleteCard = (cat) => {

//   return (dispatch) => {
//     fetch(`/categories/${cat}`, {
//       headers: { "content-type": "application/json" },
//       method: "delete",
//       body: JSON.stringify({ cat }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
// .then(() => dispatch(delTask(id)));
// };
// };

// export const postFetchTasks = (task) => {
//   return (peremennay) => {
//     fetch("/add-task", {
//       headers: { "content-type": "application/json" },
//       method: "post",
//       body: JSON.stringify({ task }),
//     })
//       .then((res) => res.json())
//       .then((data) => peremennay(addTask(data)));
//   };
// };
