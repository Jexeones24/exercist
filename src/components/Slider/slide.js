import React from 'react';
import styles from './slider.module.scss';

const Slide = ({ classNames, content }) => {
  const {
    title,
    formattedRepsAndMovements
  } = content;

  return (
    <div className={classNames}>
      <div className={styles.name}>"STOOPID NAME"</div>
      <div className={styles['text-wrapper']}>
        <div className={styles.header}>
          <span className={styles.title}>{ title }</span>
          <span className={styles['icon-wrapper']} onClick={() => alert('Favorited!!!')}>
            <img src='http://www.downloadclipart.net/large/11072-red-heart-design.png' />
          </span>
        </div>
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
