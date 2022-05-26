import React from 'react';
import styles from './adverstising.module.css'

function Advertising() {
  return (
    <div className={styles.advertising}>
      Please standBy. Here is gonna be a adverstising!
      <img src='data:image/jpeg;base64,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'/>
    </div>
  );
}

export default Advertising;