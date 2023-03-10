function setSession(key, value) {
  localStorage.setItem(key, value)
}
function getSession(key) {
  localStorage.getItem(key)
}
function removeSession(key) {
  localStorage.removeItem(key)
}

export { setSession, getSession, removeSession }
