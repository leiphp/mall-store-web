import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  // return Cookies.get(TokenKey)
  // return sessionStorage.getItem(TokenKey)
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
