import { showCategories } from "../actionCreators/categoriesAC";

export const getFetchCategories = (cat) => {
  return (dispatch) => {
    fetch(`/categories/${cat}`)
      .then((response) => response.json())
      // .then((data) => console.log(data));
    .then((data) => dispatch(showCategories(data)));
  };
};

// export const delFetchTasks = (id) => {
//   return (dispatch) => {
//     fetch("/add-task", {
//       headers: { "content-type": "application/json" },
//       method: "delete",
//       body: JSON.stringify({ id }),
//     })
//       // .then((res) => res.json())
//       .then(() => dispatch(delTask(id)));
//   };
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
