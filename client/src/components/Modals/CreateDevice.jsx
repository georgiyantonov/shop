import React, {useContext, useEffect, useState} from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'
import {createDevice, fetchBrands, fetchTypes} from "../../fetch/deviceAPI";
import {observer} from "mobx-react-lite";

export const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [rating, setRating] = useState(3)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [file, setFile] = useState({})
  const [price, setPrice] = useState(0)
  
  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, []);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i=>
      i?.number === number
        ? {...i, [key]: value}
        : i
    ))
  }
  
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  
  const selectFile = (e) => {
    setFile(e.target.files[0])
  }
  
  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('rating', `${rating}`)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    
    console.log(file)
    createDevice(formData).then(() => close()).catch(e => console.log(e))
  }
  const close = () => {
    device.setSelectedBrand({})
    device.setSelectedType({})
    setInfo([])
    setRating(3)
    setName('')
    setFile({})
    setPrice(0)
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='d-flex flex-column gap-3'>
          <div className='d-flex flex-row gap-2'>
            <Dropdown>
              <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => 
                  <Dropdown.Item
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                  >{type.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => 
                  <Dropdown.Item
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                  >{brand.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Form.Control
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Введите название устройства'
          ></Form.Control>
          <div>
            <Form.Label>Стоимость</Form.Label>
            <Form.Control
              type={'number'}
              value={price}
              min={0}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder='Введите стоимость устройства'
            ></Form.Control>
          </div>
          <div>
            <Form.Label>Рейтинг {rating}</Form.Label>
            <Form.Range
              defaultValue={3}
              min={1}
              max={5}
              step={0.1}
              onChange={(e) => setRating(e.target.value)}
            ></Form.Range>
          </div>
          <Form.Control
            type='file'
            onChange={(e) => selectFile(e)}
          ></Form.Control>
          <hr></hr>
          <Button
            variant='outline-dark'
            onClick={addInfo}
          >Добавить новое свойство</Button>
          {info.map(i => 
            <Row key={i.number} md={12} className='gx-0 justify-content-between'>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title',e.target.value, i.number)}
                  placeholder='Название характеристики'
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description',e.target.value, i.number)}
                  placeholder='Значение характеристики'
                />
              </Col>
              <Button 
                className='w-auto'
                variant='outline-danger'
                onClick={() => removeInfo(i.number)}
              >Удалить</Button>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={() => close()}>Отмена</Button>
        <Button variant='outline-success' onClick={() => addDevice()}>Добавить устройство</Button>
      </Modal.Footer>
    </Modal>
  )
})
