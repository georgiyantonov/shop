export const logOut = (user) => {
  localStorage.removeItem('token')
  user.setUser({})
  user.setIsAuth(false)
  user.setIsAdmin(false)
}