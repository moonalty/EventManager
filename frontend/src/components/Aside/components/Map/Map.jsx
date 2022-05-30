import React from 'react';
import styles from './map.module.css'

function Map() {
  return (
    <div className={styles.map}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade9e4bf79c71fd874128bbef7ccd7b5e2dd345ecfade17f831ea916b37c87e5e&ampsource=constructor"  ></iframe>
    </div>
  );
}

export default Map;
