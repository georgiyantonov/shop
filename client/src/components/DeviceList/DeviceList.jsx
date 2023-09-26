import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import {Row, Spinner} from 'react-bootstrap'
import { DeviceItem } from '../DeviceItem/DeviceItem'

export const DeviceList = observer(() => {
  const {device} = useContext(Context)
  
  if(device.loading){
    return (
      <div className='d-flex align-items-center justify-content-center'>
        <Spinner animation="grow"></Spinner>
      </div>
    )
  }
  return (
    <Row className='d-flex gap-5 justify-content-between mt-2 gx-0'>
      {device.devices.map(device =>
        <DeviceItem key={device.id} device={device}/>
      )}
    </Row>
  )
})
