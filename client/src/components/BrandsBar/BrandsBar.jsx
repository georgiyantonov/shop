import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import './style.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from 'swiper/modules'
import 'swiper/css';

export const BrandsBar = observer(() => {
  const {device} = useContext(Context)
  
  const setActive = (brand) => {
    device.setSelectedBrand(brand)
  }
  
  return (
    <Swiper
      modules={[Mousewheel]}
      spaceBetween={10}
      slidesPerView={'auto'}
      mousewheel={true}
    >
      <SwiperSlide
        border={device.selectedBrand.id === undefined ? "1px solid blue" : "1px solid black"}
        onClick={() => device.setSelectedBrand({})}
        className='p-2 w-auto'
      >
        Все
      </SwiperSlide>
      {device.brands.map(brand =>
        <SwiperSlide
          border={brand.id === device.selectedBrand.id ? "1px solid blue" : "1px solid black"}
          key={brand.id}
          onClick={() => setActive(brand)}
          className='p-2 w-auto'
        >
          {brand.name}
        </SwiperSlide>
      )}
    </Swiper>

  )
})
