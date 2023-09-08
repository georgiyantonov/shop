import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Смартфоны"
      },
      {
        id: 2,
        name: "Планшеты"
      }
    ]

    this._brands = [
      {
        id: 1,
        name: "Apple"
      },
      {
        id: 2,
        name: "Samsung"
      }
    ]

    this._devices = [
      {id: 1, name: 'iPhone 12 Pro', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/eb6/ruru_iphone12pro_q121_gold_pdp-image-1b.jpg/resize/453x480/'},
      {id: 2, name: 'iPhone 12 Pro Max', price: 70000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/2c3/ruru_iphone12promax_q121_pacificblue_pdp-image-1b.jpg/resize/453x480/'},
      {id: 3, name: 'iPhone 13 Pro Max', price: 125000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/24e/iphone_13_pro_max_q421_sierra_blue_pdp_image_position-1a__ru-ru.jpg/resize/453x480/'},
      {id: 4, name: 'Samsung Galaxy S23 Ultra', price: 159000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/b00/b009d462d6a809b854dacdfdbc0aaf8a.jpg/resize/453x480/'},
      {id: 5, name: 'Samsung Galaxy Z Fold4', price: 130000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/f87/f87293f2b786e9cc91a9c71e5dffc07a.jpg/resize/453x480/'}
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
}