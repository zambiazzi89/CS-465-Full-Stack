const fs = require('fs')
const roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'))

const rooms = (req, res) => {
  res.render('rooms', { roomsData })
}

module.exports = {
  rooms,
}
