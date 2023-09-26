import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import create from '../../fetch/create/create'
export const CreateType = ({show, onHide}) => {
  const [type, setType] = useState('')
  const cancel = () => {
    setType('')
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
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder='Введите название типа'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={() => cancel()}>Отмена</Button>
        <Button
          variant='outline-success'
          onClick={() => create('type', type, cancel)}
        >Добавить тип</Button>
      </Modal.Footer>
    </Modal>
  )
}
