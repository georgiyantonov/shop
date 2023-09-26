import React from 'react'
import { Card, Image } from 'react-bootstrap'
import star from '../../assets/rating-star.svg'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts'

export const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <Card border='dark' className='p-3 w-20 justify-content-between' onClick={()=> navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Image className='w-100' src={process.env.REACT_APP_API_URL + device.img}></Image>
      <div className="d-flex flex-column justify-content-between">
        <div className='d-flex text-black-50 justify-content-between align-items-center mt-2'>
          <div>{device.name}</div>
          <div className='d-flex'>
            <div>{device.rating}</div>
            <Image src={star}></Image>
          </div>
        </div>
        <div>{device.name}</div>
        <div>{device.price}</div>
      </div>
    </Card>
  )
}
