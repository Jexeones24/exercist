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
      <div className={styles['slide-wrapper']}>
        <div className={styles['workout-body']}>
          <span className={styles.title}>{ title }</span>
          <React.Fragment>
            { formattedRepsAndMovements
                .map((reps, idx) => (
                  <div key={idx}>{ reps }</div>
                ))
            }
          </React.Fragment>
        </div>
        <div className={styles['right-side-icons']}>
          <span className={styles['icon-wrapper']} onClick={() => alert('Favorited!!!')}>
            <img src='http://www.downloadclipart.net/large/11072-red-heart-design.png' />
          </span>
          <span>TRY</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
