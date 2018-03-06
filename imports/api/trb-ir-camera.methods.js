import {
  HTTP
} from 'meteor/http'

Meteor.methods({
  getPicture: function() {
    return result = HTTP.call('GET', 'http://localhost:5000/palette/image', {
      data: {
        some: 'json',
        stuff: 1
      }
    })
  },
  getTemperature: function(posX, posY) {
    console.log(posX, posY)
    return result = HTTP.call('GET', 'http://localhost:5000/thermal/coordinates/temperature/' + posX + ':' + posY, {
      data: {
        some: 'json',
        stuff: 1
      }
    })
  }
})