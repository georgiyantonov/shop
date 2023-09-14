import { observer } from 'mobx-react-lite'
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext } from 'react'
import { Context } from '../..'
import './style.scss'

export const TypesBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <ListGroup>
      {device.types.map(type => 
        <ListGroup.Item 
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
        >{type.name}</ListGroup.Item>
      )}
    </ListGroup>
  )
})
