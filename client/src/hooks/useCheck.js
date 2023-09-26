import {check} from "../fetch/userAPI";
import {useEffect, useState} from "react";

export default function useCheck(user) {
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    check()
      .then(data => {
        user.setUser(data)
        user.setIsAuth(true)
        setIsLoading(false)
        let {role} = data
        role === "ADMIN" && user.setIsAdmin(true)
      }).catch((e) => {
        console.log(e.message)
      }).finally(() => {
        setIsLoading(false)
      })
    }, [])
    return isloading
}
