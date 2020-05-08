import React from 'react';
import './App.css';
import RourerURL from '../RouterURL/RourerURL';
import Headers from '../../container/Headers/Headers';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loading from '../../loading/Loading';
import { ToastContainer } from 'react-toastify';
import configmiddleware from './../../redux/configmiddleware';
function App() {
  const store = configmiddleware();
  return (
    <Provider store={store}>
      <Router>
        <>
          <ToastContainer></ToastContainer>
          <Headers></Headers>
          <RourerURL></RourerURL>
          <Loading></Loading>
        </>
      </Router>

    </Provider>
  );
}
export default App;
