import { BrowserRouter } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./fetch/userAPI";
import { Spinner } from "react-bootstrap";


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  if(loading) {
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
