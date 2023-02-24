import React from 'react';
import { Outlet } from "react-router-dom"
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}></div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
