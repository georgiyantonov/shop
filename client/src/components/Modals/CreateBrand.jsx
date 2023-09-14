import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export const CreateBrand = ({show, onHide}) => {
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
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название бренда'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Отмена</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить бренд</Button>
      </Modal.Footer>
    </Modal>
  )
}
