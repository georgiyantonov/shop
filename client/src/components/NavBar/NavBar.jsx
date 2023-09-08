import React, { useContext } from 'react'
import { Context } from '../..'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AUTH_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import './style.scss'
import {observer} from 'mobx-react-lite'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const NavBar = observer(() => {
  const {user} = useContext(Context)

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
              {user.isAdmin && <Link Link variant={"outline-light"}>Admin</Link>}
              <Link>Корзина</Link>
              <Link onClick={() => user.setIsAuth(false)}>Выйти</Link>
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
