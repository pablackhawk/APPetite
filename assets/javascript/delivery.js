$(document).ready(function () {
  var queryaddress = '11090+Santa+Monica+Blvd+Los+Angeles+CA,+90025'

  var queryURL = 'https://api.eatstreet.com/publicapi/v1/restaurant/search-test?method=both&street-address=' +
					queryaddress + '&access-token=e4d79c106ba7c4b2'

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function (response) {
    console.log(response)
    var results = response.data
  })
})
