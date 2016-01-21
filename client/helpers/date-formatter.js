export default function (date) {
  date = new Date(date)

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}
