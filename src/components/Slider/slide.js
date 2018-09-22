import React from 'react';
import styles from './slider.module.scss';

const Slide = ({ classNames, content }) => {
  const {
    name,
    title,
    formattedRepsAndMovements
  } = content;

  return (
    <div className={classNames}>
      <div className={styles.name}>"{ name }"</div>
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
            <img src='http://www.downloadclipart.net/large/11072-red-heart-design.png' alt='heart' />
          </span>
          <span>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Button_Icon_Green.svg/2000px-Button_Icon_Green.svg.png' alt='circle'/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
