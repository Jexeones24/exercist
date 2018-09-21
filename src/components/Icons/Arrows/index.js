import React from 'react';
import classnames from 'classnames';
import { ARROWS_SRC } from '../constants';
import styles from './arrows.module.scss';

const Arrows = (props) => {
  const classes = classnames(
    styles.icon,
    props.forward && styles.forward
  );

  return (
    <span className={classes} onClick={props.onClick}>
      <img src={ARROWS_SRC} alt={ props.forward ? 'Forward' : 'Back' } />
    </span>
  );
};

export default Arrows;
