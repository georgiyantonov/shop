import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";


const PaginationString = observer(() => {
  const {device} = useContext(Context)
  const pagesCount = Math.ceil(device.totalCount / device.limit)
  const pages = []
  
  
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }
  
  return (
    <Pagination size={"sm"} className='mt-5 justify-content-center'>
      <Pagination.First onClick={() => device.setPage(1)}/>
      <Pagination.Prev onClick={() => device.page === 1 ? device.setPage(1) : device.setPage(device.page - 1)}/>
      {pages.map(page =>
        <Pagination.Item
          key={page}
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >{page}</Pagination.Item>
      )}
      <Pagination.Next onClick={() => device.page !== pages.length && device.setPage(device.page + 1)}/>
      <Pagination.Last onClick={() => device.setPage(pages.length)}/>
    </Pagination>
  );
})

export default PaginationString;