import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import productStar from '../assets/product-rating.svg'

export default function DevicePage() {
  const device = {id: 1, name: 'iPhone 12 Pro', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/eb6/ruru_iphone12pro_q121_gold_pdp-image-1b.jpg/resize/453x480/'}
  const description = [
    {id:1, title: "Оперативная память", value: "6 гб"},
    {id:2, title: "Камера", value: "48 мп"},
    {id:3, title: "Процессор", value: "M2"},
    {id:4, title: "Количество ядер", value: "16"},
    {id:5, title: "Аккумулятор", value: "6000"},
  ]

  return (
    <Container className='pt-5'>
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300}></Image>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 className='w-auto'>{device.name}</h2>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${productStar}) no-repeat center center`, width: '240px', height: '240px', backgroundSize: 'cover', fontSize: 64}}
            >{device.rating}</div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex justify-content-center align-items-center p-3 gap-3'>
            <h3>{device.price}</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5 m-0">
        <h4>Характеристики</h4>
        {description.map((info, index) =>
          <Row 
            key={info.id}
            className='p-2 m-0'
            style={{
              background: index % 2 === 0 ? 'lightgrey' : 'transparent',
            }}
          >{info.title} : {info.value}</Row> 
        )}
      </Row>
    </Container>
  )
}
