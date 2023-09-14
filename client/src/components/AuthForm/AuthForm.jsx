import React, { useContext, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AUTH_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import { login, registration } from '../../fetch/userAPI'

export const AuthForm = observer(() => {
  const location = useLocation()
  const nav = useNavigate()
  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLogin = location.pathname === AUTH_ROUTE

  const auth = async() => {
    let data;

    if (isLogin) {
      data = await login(email, password)
      .then(() => {
        user.setIsAuth(true)
        nav(`${SHOP_ROUTE}`)
        user.setUser(data)
      }).catch((e) => {
        alert(e)
      })
    } else {
      data = await registration(email, password)
      .then(() => {
        user.setIsAuth(true)
        nav(`${SHOP_ROUTE}`)
        user.setUser(data)
      }).catch((e) => {
        alert(e)
      })
    }
    console.log(user)
  }

  return (
    <Card className='d-flex w-50 h-auto p-3 p-lg-5 p-md-3 gap-5'>
      <h2 className='align-self-center'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
      <Form className='d-flex flex-column gap-3'>
        <Form.Control
          placeholder='Введите email'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        ></Form.Control>
        <Form.Control
          placeholder='Введите пароль'
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          type='password'
        ></Form.Control>
        {!isLogin &&
          <Form.Control
            placeholder='Повторите пароль'
          ></Form.Control>
        }
        <Row className='d-flex flex-column gap-3 gap-md-0 align-items-center flex-lg-row flex-md-column flex-nowrap gx-0'>
          {isLogin 
            ? <div className='flex-shrink-1 p-0'>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link></div>
            : <div className='flex-shrink-1 p-0'>Есть аккаунт? <Link to={AUTH_ROUTE}>Авторизуйтесь</Link></div>
          }
          <Button 
            variant="outline-dark"
            className='align-self-end flex-shrink-1 gx-0'
            onClick={() => auth()}
            
          >{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
        </Row>
        
      </Form>
    </Card>
  )
})
