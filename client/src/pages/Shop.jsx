import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TypesBar } from '../components/TypesBar/TypesBar'
import { BrandsBar } from '../components/BrandsBar/BrandsBar'
import { DeviceList } from '../components/DeviceList/DeviceList'

export default function Shop() {
  return (
    <Container className='pt-5'>
      <Row>
        <Col md={3}>
          <TypesBar></TypesBar>
        </Col>
        <Col md={9}>
          <BrandsBar></BrandsBar>
          <DeviceList></DeviceList>
        </Col>
      </Row>
    </Container>
  )
}
