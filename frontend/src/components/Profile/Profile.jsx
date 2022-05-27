import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { categories: list } = useSelector((state) => state.categories);
  console.log("LIST>>>>>>>>>", list);
  return (
    <>
      <div>Cards</div>
    </>
  );
};

export default Profile;
