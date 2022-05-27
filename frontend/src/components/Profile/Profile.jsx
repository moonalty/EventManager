import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchSubs } from "../../redux/thunk/asyncSubscribes";
import TinyOneEventCard from "../TinyOneEventCard/TinyOneEventCard";

const Profile = () => {
  const dispatch = useDispatch();
  const { subscribed } = useSelector((state) => state.subscribed);
  useEffect(() => {
    dispatch(getFetchSubs());
  }, [dispatch]);
  // console.log("LIST>>>>", subscribed);
  return (
    <>
      <div>
        {subscribed?.map(
          (el) => (el = <TinyOneEventCard el={el[0]} key={el[0].id} />)
        )}
      </div>
    </>
  );
};

export default Profile;
