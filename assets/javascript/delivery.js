$(document).ready(function () {
  // Pulls restaurant data
  $('#delivery-search').on('click', function displayRestaurants (event) {
    event.preventDefault()
    $('.restaurant-display').empty()
    var queryAddress = $('#user-address').val().trim()
    // var queryAddress = '54+E+Peltason+Dr,+Irvine,+CA+92617'
    var queryURL = 'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery&street-address=' +
    queryAddress + '&access-token=e4d79c106ba7c4b2'
    $('.restaurant-display').append('Showing results for: ' + queryAddress)
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function (response) {
      console.log(response)
      var results = response.restaurants
      if (results === '') {
        $('.restaurant-display').text('There are no results for that search')
      }
      // Runs through response array
      for (var i = 0; i < results.length; i++) {
        var restaurantDiv = $('<div class="auto cell restaurant">')
        var restaurantName = results[i].name
        var p1 = $('<p>').text(restaurantName)
        var restaurantLogo = $('<img>')
        restaurantLogo.attr('src', results[i].logoUrl)
        restaurantLogo.attr('class', 'restaurant-logo')
        var restaurantAddress = results[i].streetAddress
        var restaurantCity = results[i].city
        var restaurantState = results[i].state
        var restaurantZip = results[i].zip
        var restaurantType = results[i].foodTypes[j]
        var p2 = $('<p>').text(restaurantAddress + ', ' + restaurantCity + ', ' + restaurantState + ', ' + restaurantZip)
        var p3 = $('<p>').text(restaurantType)
        restaurantDiv.append(p1)
        restaurantDiv.prepend(restaurantLogo)
        restaurantDiv.append(p2)
        restaurantDiv.append(p3)
        $('.restaurant-display').append(restaurantDiv)
        $('#user-address').val('')
      }
    })
  })
})
