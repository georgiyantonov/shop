import React, { useEffect, useState} from 'react'
import {Button, Card, Col, Container, Image, Row, Spinner} from 'react-bootstrap'
import productStar from '../assets/product-rating.svg'
import {fetchDevice} from "../fetch/deviceAPI";
import {useNavigate, useParams} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

export default function DevicePage() {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchDevice(id).then((data) => {
      setLoading(false)
      setDevice(data)
    }).catch((e) =>{
      console.log(e)
      navigate(SHOP_ROUTE)
    })
  }, []);
  
  if(loading){
    return (
      <Spinner className='position-fixed top-50 start-50' animation="grow"></Spinner>
    )
  }
  
  return (
    <Container className='pt-5'>
      <Row>
        <Col md={4}>
          <Image src={process.env.REACT_APP_API_URL + device?.img} width={300} height={300}></Image>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 className='w-auto'>{device.name}</h2>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${productStar}) no-repeat center center`, width: '240px', height: '240px', backgroundSize: 'cover', fontSize: 64}}
            >{device?.rating}</div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex justify-content-center align-items-center p-3 gap-3'>
            <h3>{device?.price}</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5 m-0">
        <h4>Характеристики</h4>
        {device.info.map((info, index) =>
          <Row 
            key={info.id}
            className='p-2 m-0'
            style={{
              background: index % 2 === 0 ? 'lightgrey' : 'transparent',
            }}
          >{info?.title} : {info?.description}</Row>
        )}
      </Row>
    </Container>
  )
}
