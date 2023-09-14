import React, { useContext } from 'react'
import { Context } from '../..'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import './style.scss'
import {observer} from 'mobx-react-lite'
import { Link, useNavigate } from "react-router-dom";


export const NavBar = observer(() => {
  const {user} = useContext(Context)
  const nav = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={SHOP_ROUTE}>
              Магазин
            </Link>    
          </Navbar.Brand>
          {user.isAuth ?
            <Nav className="ml-auto gap-2">
              <Link to={ADMIN_ROUTE}>Admin</Link>
              <Link to={BASKET_ROUTE}>Корзина</Link>
              <Link onClick={() => logOut()}>Выйти</Link>
            </Nav>
            :
            <Nav className="ml-auto">
              <Link to={AUTH_ROUTE}>Авторизация</Link>
            </Nav>
          }
          
        </Container>
      </Navbar>
  )
})
