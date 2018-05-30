export const formatTime = (time) => {
  const date = time.getDate()
  const month = time.getMonth()
  const year = time.getFullYear()
  const hour = time.getHours()
  const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
  const second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
  return `${date}/${month}/${year} ${hour}:${minute}:${second}`
}
