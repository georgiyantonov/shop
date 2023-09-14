import React from 'react'
import { Card, Image } from 'react-bootstrap'
import star from '../../assets/rating-star.svg'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts'

export const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
      <Card border='dark' className='p-3 w-20' onClick={()=> navigate(`${DEVICE_ROUTE}/${device.id}`)}>
        <Image width={150} height={150} src={device.img}></Image>
        <div className='d-flex text-black-50 justify-content-between align-items-center mt-2'>
          <div>Samsung....</div>
          <div className='d-flex'>
            <div>{device.rating}</div>
            <Image src={star}></Image>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
  )
}
