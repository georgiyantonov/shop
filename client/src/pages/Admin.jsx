import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CreateBrand } from '../components/Modals/CreateBrand'
import { CreateType } from '../components/Modals/CreateType'
import { CreateDevice } from '../components/Modals/CreateDevice'

export default function Admin() {
  const [brandShown, setBrandShown] = useState(false)
  const [typeShown, setTypeShown] = useState(false)
  const [deviceShown, setDeviceShown] = useState(false)

  return (
    <Container className='d-flex flex-column align-items-center justify-content-center  gap-2 mt-5'>
      <Button 
        variant='outline-dark d-flex'
        onClick={() => setTypeShown(true)}
      >Добавить тип</Button>
      <Button 
        variant='outline-dark d-flex'
        onClick={() => setBrandShown(true)}
      >Добавить бренд</Button>
      <Button 
        variant='outline-dark d-flex'
        onClick={() => setDeviceShown(true)}
      >Добавить устройство</Button>
      <CreateType show={typeShown} onHide={() => setTypeShown(false)}/>
      <CreateBrand show={brandShown} onHide={() => setBrandShown(false)}/>
      <CreateDevice show={deviceShown} onHide={() => setDeviceShown(false)}/>
    </Container>
  )
}
