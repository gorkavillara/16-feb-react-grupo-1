import Sidebar from 'components/Sidebar';
import React from 'react';
import { Outlet } from "react-router-dom"
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
