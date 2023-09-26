import {createBrand, createType} from "../deviceAPI";

export default  function create(instance, value, f){
  switch (instance) {
    case 'type':
      createType({name: value})
        .then(() => {
          f()
        }).catch((e) => {
          console.log(e.message)
        }).finally(() => {
          f()
        })
      break
    case 'brand':
      createBrand({name: value})
        .then(() => {
          f()
        }).catch((e) => {
          console.log(e.message)
        }).finally(() => {
          f()
        })
      break
  }
}