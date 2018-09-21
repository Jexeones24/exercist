import React from 'react';
import styles from './slider.module.scss';

const Slide = ({ className, content }) => {
  const {
    title,
    formattedRepsAndMovements
  } = content;

  return (
    <div className={styles.slide}>
      <div className={styles.name}>"STOOPID NAME"</div>
      <div className={styles['text-wrapper']}>
        <h1>{ title }</h1>
        <React.Fragment>
          { formattedRepsAndMovements
              .map((reps, idx) => (
                <div key={idx}>{ reps }</div>
              ))
          }
        </React.Fragment>
      </div>
    </div>
  );
};

export default Slide;
