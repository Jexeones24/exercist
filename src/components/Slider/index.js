import React, { Component } from 'react';
import Arrows from 'components/Icons/Arrows';
import Slide from './slide';
import classnames from 'classnames';
import styles from './slider.module.scss';

class Slider extends Component {
  state = {
    currentIdx: 0,
    slides: this.props.slides,
  }

  goToPrevious = () => {
    if (this.state.currentIdx === 0) {
      return null;
    }

    this.setState(prevState => ({
      currentIdx: prevState.currentIdx - 1
    }));
  }

  goToNext = () => {
    if (this.state.currentIdx === this.state.slides.length - 1) {
      return null;
    }

    this.setState(prevState => ({
      currentIdx: prevState.currentIdx + 1
    }));
  }

  render () {
    const slideClassNames = (idx) => classnames(
      styles.slide,
      this.state.currentIdx === idx && styles.active
    );

    return (
      <div className={styles.slider}>
        <div className={styles['slides-wrapper']}>
          { this.state.slides
            .map((slide, idx) => (
              <Slide
                key={idx}
                classNames={slideClassNames(idx)}
                content={slide}
              />
            ))
          }
        </div>
        <div className={styles.buttons}>
          <Arrows back onClick={this.goToPrevious} />
          <span
            className={styles.toggle}
            onClick={this.props.showTimeDisplay}
          >
            CHOOSE NEW TIME
          </span>
          <Arrows onClick={this.goToNext}/>
        </div>
      </div>
    );
  }
}

export default Slider;
