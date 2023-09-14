import React from 'react'
import { AuthForm }from '../components/AuthForm/AuthForm'
import Container from 'react-bootstrap/esm/Container'

export default function Auth() {
  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 56}}
    >
      <AuthForm></AuthForm>
    </Container>
  )
}
