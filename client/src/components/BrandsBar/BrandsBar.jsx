import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import './style.scss'
import { Card, Row } from 'react-bootstrap';

export const BrandsBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <Row className='d-flex gap-3'>
      {device.brands.map(brand => 
        <Card 
          border={brand.id === device.selectedBrand.id ? 'info' : 'dark'}
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          className='p-3 w-auto'
        >{brand.name}</Card>
      )}
    </Row>
  )
})
