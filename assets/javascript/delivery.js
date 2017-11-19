$(document).ready(function () {
  // Pulls restaurant data
  $('#submit-address').on('click', function (event) {
    event.preventDefault()
    $('.restaurant-display').empty()
    var queryAddress = $('#address-input').val().trim()
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
        restaurantDiv.attr('data-apiKey', results[i].apiKey)
        var p1 = $('<p>').text(restaurantName)
        var restaurantLogo = $('<img>')
        restaurantLogo.attr('src', results[i].logoUrl)
        restaurantLogo.attr('class', 'restaurant-logo')
        var restaurantAddress = results[i].streetAddress
        var restaurantCity = results[i].city
        var restaurantState = results[i].state
        var restaurantZip = results[i].zip
        //figure out how to display hours
        var restaurantHours = results[i].hours
        restaurantHours.toString()
        console.log('-----------')
        console.log(restaurantHours)
        var hours = []
        hours.push(restaurantHours)
        console.log('-----------')
        console.log(hours)
        var restaurantType = results[i].foodTypes
        var p2 = $('<p>').text(restaurantAddress + ', ' + restaurantCity + ', ' + restaurantState + ', ' + restaurantZip)
        var p3 = $('<p>').text(restaurantType)
        for (var j = 0; j < hours.length; j++) {
          var p4 = $('<p>').text(hours[j])
        }
        restaurantDiv.append(p1)
        restaurantDiv.prepend(restaurantLogo)
        restaurantDiv.append(p2)
        restaurantDiv.append(p3)
        //append hours here
        restaurantDiv.append(p4)
        $('.restaurant-display').append(restaurantDiv)
        $('#user-address').val('')
      }
    })
  })
})
