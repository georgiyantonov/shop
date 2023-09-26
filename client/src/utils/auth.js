import {login, registration} from "../fetch/userAPI";

export default async function auth(isLogin, email, password, user) {

  if (isLogin) {
    await login(email, password)
      .then((data) => {
        user.setIsAuth(true)
        user.setUser(data)
        let {role} = data
        role === "ADMIN" && user.setIsAdmin(true)
      }).catch((e) => {
        alert(e.message)
      })
  } else {
    await registration(email, password)
      .then((data) => {
        user.setIsAuth(true)
        user.setUser(data)
        let {role} = data
        role === "ADMIN" && user.setIsAdmin(true)
      }).catch((e) => {
        alert(e.message)
      })
  }
}