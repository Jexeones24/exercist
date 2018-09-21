import React, { Component } from 'react';
import Slide from './slide';
import classnames from 'classnames';
import styles from './slider.module.scss';

class Slider extends Component {
  state = {
    currentIdx: 0,
    slides: this.props.slides,
  }

  goToPrevious = () => {

  }

  goToNext = () => {
    if (this.state.currentIdx === this.state.slides.length - 1) {
      return null;
    }

    this.setState(prevState => ({
      currentIdx: prevState.currentIdx + 1,
    }))
  }

  render () {
    return (
      <div className={styles.slider}>

        <div className={styles['slides-wrapper']}>
          { this.state.slides
            .map((slide, idx) => (
              <Slide
                key={idx}
                content={slide}
              />
            ))
          }
        </div>

        <div className={styles.buttons}>
          <span
            className={styles.next}
            onClick={this.goToNext}
          >
            NEXT
          </span>
          <span
            className={styles.try}
          >
            TRY!
          </span>
          <span
            className={styles.back}
            onClick={this.goToPrevious}
          >
            BACK
          </span>
        </div>
      </div>
    );
  }
}

export default Slider;
