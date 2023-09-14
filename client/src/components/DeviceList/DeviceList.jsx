import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import { Row } from 'react-bootstrap'
import { DeviceItem } from '../DeviceItem/DeviceItem'

export const DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (
    <Row className='d-flex gap-5 mt-2'>
      {device.devices.map(device => 
        <DeviceItem key={device.id} device={device}/>
      )}
    </Row>
  )
})
