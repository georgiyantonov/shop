import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { TypesBar } from '../components/TypesBar/TypesBar'
import { BrandsBar } from '../components/BrandsBar/BrandsBar'
import { DeviceList } from '../components/DeviceList/DeviceList'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../fetch/deviceAPI";
import PaginationString from "../components/PaginationString/PaginationString";
import SortBar from "../components/SortBar/SortBar";

export const Shop = observer(() => {
  const {device} = useContext(Context)
  
  useEffect(() => {
    device.setLoading(true)
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, 12, '').then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
      device.setLoading(false)
    })
  }, []);
  
  useEffect(() => {
    device.setLoading(true)
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit, device.sort).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
      device.setLoading(false)
    })
  }, [device.page, device.selectedType, device.selectedBrand, device.limit, device.sort]);
  
  return (
    <Container className='pt-5 pb-5'>
      <Row>
        <Col md={3}>
          <TypesBar></TypesBar>
        </Col>
        <Col md={9} className="gx-0 position-relative">
          <BrandsBar/>
          <SortBar/>
          <DeviceList></DeviceList>
          <PaginationString></PaginationString>
        </Col>
      </Row>
    </Container>
  )
})
