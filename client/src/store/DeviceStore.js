import {runInAction, makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = []
    this._brands = []
    this._devices = []
    this._selectedType = {}
    this._selectedBrand = {}
    this._page = 1
    this._totalCount = 0
    this._sort = ''
    this._limit = 12
    this._loading = true
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
  setSelectedType(type) {
    runInAction(() => {
      this.setPage(1)
      this._selectedType= type
    })
  }
  setSelectedBrand(brand) {
    runInAction(() => {
      this.setPage(1)
      this._selectedBrand = brand
    })
    
  }
  setPage(page) {
    this._page = page
  }
  setTotalCount(count) {
    this._totalCount = count
  }
  setLoading(bool) {
    runInAction(() => {
      this._loading = bool
    })
  }
  
  setSort(sort) {
    this._sort = sort
  }
  
  setLimit(limit) {
    this._limit = limit
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
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
  get page() {
    return this._page
  }
  get totalCount() {
    return this._totalCount
  }
  get limit() {
    return this._limit
  }
  get loading() {
    return this._loading
  }
  get sort() {
    return this._sort
  }
}