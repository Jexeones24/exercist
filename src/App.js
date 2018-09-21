import React, { Component } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import ToggleDisplay from 'containers/ToggleDisplay';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Navbar />
          <ToggleDisplay />
        <Footer />
      </div>
    );
  }
}

export default App;
