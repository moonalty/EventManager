import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './WelcomePage.css'
function WelcomePage(props) {
 
  const {welcome} = useSelector(store=>store.welcome)
  console.log(welcome);
  return (
    <div className='welcome' >
       {welcome}
    </div>
  );
}

export default WelcomePage;
