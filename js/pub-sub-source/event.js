const event = require('events')
const ev = new event()

ev.on('price', () => {
  console.log('123')
})

ev.emit('price');