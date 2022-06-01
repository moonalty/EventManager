import React from 'react';
import styles from './calendar.module.css'

function Calendar() {
  return (
    <div className={styles.calendar}>
      <iframe src="https://calendar.google.com/calendar/embed?height=900&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FMoscow&showCalendars=1&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230B8043" style={{ width: 300, height: 300 }}></iframe>
      {/* Please standBy. Here is gonna be a calendar!
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtBuHjQHtsV4smsR_koEF2eKTto-lKS8dkg&usqp=CAU'/> */}
    </div>
  );
}

export default Calendar;
