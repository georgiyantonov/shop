import React from 'react'
import {Form, Card, Button, Row} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'

export default function AuthForm() {
  const location = useLocation()
  const isLogin = location.pathname === AUTH_ROUTE

  return (
    <Card className='d-flex w-50 h-auto p-5 gap-5'>
      <h2 className='align-self-center'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
      <Form className='d-flex flex-column gap-3'>
        <Form.Control
          placeholder='Введите email'
        ></Form.Control>
        <Form.Control
          placeholder='Введите пароль'
        ></Form.Control>
        {!isLogin &&
          <Form.Control
            placeholder='Повторите пароль'
          ></Form.Control>
        }
        <Row className='d-flex flex-row flex-nowrap'>
          {isLogin 
            ? <div className='flex-shrink-1 p-0 gx-0'>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link></div>
            : <div className='flex-shrink-1 p-0 gx-0'>Есть аккаунт? <Link to={AUTH_ROUTE}>Авторизуйтесь</Link></div>
          }
          <Button 
            variant="outline-dark"
            className='align-self-end flex-shrink-1 gx-0'
          >{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
        </Row>
        
      </Form>
    </Card>
  )
}
