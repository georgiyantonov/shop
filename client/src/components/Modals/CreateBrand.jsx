import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import create from "../../fetch/create/create";

export const CreateBrand = ({show, onHide}) => {
  const [brand, setBrand] = useState('')
  const cancel = () => {
    setBrand('')
    onHide()
  }
  
  return (
    <Modal
      show={show}
      onHide={cancel}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название бренда'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={() => cancel()}>Отмена</Button>
        <Button
          variant='outline-success'
          onClick={() => create('brand', brand, onHide)}
        >Добавить бренд</Button>
      </Modal.Footer>
    </Modal>
  )
}
