import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchSubs } from "../../../../redux/thunk/asyncSubscribes";
import TinyProfileEventCard from "../../../MaterialProfileTinyCards/MaterialProfileTinyCards";


function UserProfile() {
  const dispatch = useDispatch();
  const { subscribed } = useSelector((state) => state.subscribed);
  
  useEffect(()=> {
    dispatch(getFetchSubs())
  },[dispatch])




  return (
    <div>
      <p style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '30px'}}>Вы подписаны на мероприятия: </p>
      <div>
        {subscribed?.map(
          (el) => (el = <TinyProfileEventCard el={el[0]} key={el[0]?.id} />)
        )}
      </div>
    </div>
  );
}

export default UserProfile;
