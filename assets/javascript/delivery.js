$(document).ready(function () {
  // Pulls restaurant data
  function displayRestaurants () {
    $('.restaurant-display').empty()
    var queryaddress = '54+E+Peltason+Dr,+Irvine,+CA+92617'
    var queryURL = 'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery&street-address=' +
    queryaddress + '&access-token=e4d79c106ba7c4b2'
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function (response) {
      console.log(response)
      var results = response.restaurants
      if (results === '') {
        console.log('There are no results for that search')
      }
      // Runs through response array
      for (var i = 0; i < results.length; i++) {
        var restaurantDiv = $('<div class="restaurant">')
        var restaurantName = results[i].name
        var p1 = $('<p>').text(restaurantName)
        var restaurantLogo = $('<img>')
        restaurantDiv.attr('src', results[i].logoURL)
        restaurantLogo.attr('class', 'restaurant-logo')
        var restaurantAddress = results[i].streetAddress
        var restaurantCity = results[i].city
        var restaurantState = results[i].state
        var restaurantZip = results[i].zip
        var restaurantType = results[i].foodTypes[i]
        var p2 = $('<p>').text(restaurantAddress + ', ' + restaurantCity + ', ' + restaurantState + ', ' + restaurantZip)
        var p3 = $('<p>').text(restaurantType)
        restaurantDiv.append(p1)
        restaurantDiv.prepend(restaurantLogo)
      }
    })
  }
  displayRestaurants()
})
