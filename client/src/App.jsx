import { BrowserRouter } from "react-router-dom";
import React, { useContext } from 'react'
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { Spinner } from "react-bootstrap";
import useCheck from "./hooks/useCheck";


const App = observer(() => {
  const {user} = useContext(Context)
  let isLoader = useCheck(user)

  if(isLoader) {
    return (
      <Spinner className='position-fixed top-50 start-50' animation="grow"></Spinner>
    )
  }
  
  return (
    <BrowserRouter basename="/">
      <NavBar/>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
})

export default App;
