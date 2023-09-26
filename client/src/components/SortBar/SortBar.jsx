import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import Dropdown from 'react-bootstrap/Dropdown';
import {Context} from "../../index";

const SortBar = observer(() => {
  const {device} = useContext(Context)
  const sortName = {
    "name" : "названию",
    "ratingasc" : "возрастанию рейтинга",
    "ratingdesc" : "убыванию рейтинга",
    "priceasc" : "возрастанию цены",
    "pricedesc" : "убыванию цены"
  }
  
  return (
    <div className="mt-2 d-flex justify-content-between flex-row">
      <Dropdown className=''>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          {device.sort.length !== 0 ? 'По ' + sortName[device.sort] : 'Сортировать по'}
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => device.setSort('name')}
          >Названию</Dropdown.Item>
          <Dropdown.Item
            onClick={() => device.setSort('priceasc')}
          >Возрастанию цены</Dropdown.Item>
          <Dropdown.Item
            onClick={() => device.setSort('pricedesc')}
          >Убыванию цены</Dropdown.Item>
          <Dropdown.Item
            onClick={() => device.setSort('ratingasc')}
          >Возрастанию рейтинга</Dropdown.Item>
          <Dropdown.Item
            onClick={() => device.setSort('ratingdesc')}
          >Убыванию рейтинга</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <Dropdown className=''>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          {"Вывести " + device.limit}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => device.setLimit(12)}
          >12</Dropdown.Item>
          <Dropdown.Item
            onClick={() => device.setLimit(24)}
          >24</Dropdown.Item>
          <Dropdown.Item
            onClick={() => device.setLimit(48)}
          >48</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    
  );
})

export default SortBar;