function setSession(key, value) {
  localStorage.setItem(key, value)
}
function getSession(key) {
  return localStorage.getItem(key)
}
function removeSession(key) {
  localStorage.removeItem(key)
}

export { setSession, getSession, removeSession }
