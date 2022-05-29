import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TinyProfileEventCard from "../../../MaterialProfileTinyCards/MaterialProfileTinyCards";


function UserProfile() {
  const dispatch = useDispatch();
  const { subscribed } = useSelector((state) => state.subscribed);
  




  return (
    <div>
      <h1>Вы подписаны на мероприятия: </h1>
      <div>
        {subscribed?.map(
          (el) => (el = <TinyProfileEventCard el={el[0]} key={el[0]?.id} />)
        )}
      </div>
    </div>
  );
}

export default UserProfile;
