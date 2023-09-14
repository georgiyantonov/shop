import React, { useContext, useState } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'

export const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)
  const [rating, setRating] = useState(3)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', descprition: '', number: Date.now() }])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
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
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => 
                  <Dropdown.Item
                    key={type.id}
                    onClick={() => device.set}
                  >{type.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => 
                  <Dropdown.Item
                    key={brand.id}
                    onClick={() => device.set}
                  >{brand.name}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Form.Control
            placeholder='Введите название устройства'
          ></Form.Control>
          <div>
            <Form.Label>Рейтинг {rating}</Form.Label>
            <Form.Range
              defaultValue={3}
              min={1}
              max={5}
              step={0.1}
              onChange={e => setRating(e.target.value)}
            ></Form.Range>
          </div>
          <Form.Control
            type='file'
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
                  placeholder='Название характеристики'
                />
              </Col>
              <Col md={6}>
                <Form.Control 
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
        <Button variant='outline-danger' onClick={onHide}>Отмена</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить устройство</Button>
      </Modal.Footer>
    </Modal>
  )
}
