import { BrowserRouter } from "react-router-dom";
import React from 'react'
import AppRouter from "./components/AppRouter";
import {NavBar} from "./components/NavBar/NavBar";


function App() {
  return (
    <BrowserRouter basename="/">
      <NavBar/>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
