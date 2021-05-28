import './App.css';
import Routes from "./routes"
import React, { useEffect } from 'react';
import { startTimer } from './actions/clockAction'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {startTimer(dispatch)})
  //might need useHistory placed here and passed to Routes
  return (
    <div className="App">
      <div className="App-base">
        <Routes />
      </div>
    </div>
  );
}

export default App;
