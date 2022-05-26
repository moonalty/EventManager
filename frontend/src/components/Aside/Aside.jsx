import React from 'react';
import {Link} from 'react-router-dom'
import Advertising from './components/Advertising/Advertising';
import Calendar from './components/Calendar/Calendar';
import Map from './components/Map/Map';

function Aside(props) {
  return (
    <div>
      <Link to='/calendar'>Please standBy. Here is gonna be a calendar!{<Calendar/>}</Link>
      <Link to='/map'>Please standBy. Here is gonna be a map! {<Map/>} </Link>
      <Link to='/adverstising'>Please standBy. Here is gonna be a adverstising! {<Advertising/>} </Link>
    </div>
  );
}

export default Aside;
