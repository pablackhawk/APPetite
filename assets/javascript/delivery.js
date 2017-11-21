$(document).ready(function () {
  // Pulls restaurant data
  $('#submit-address').on('click', function restaurantResults (event) {
    event.preventDefault()
    $('.restaurant-display').empty()
    var queryAddress = $('#address-input').val().trim()
    // var queryAddress = '54+E+Peltason+Dr,+Irvine,+CA+92617' // Test address
    if (queryAddress === '') {
      $('.restaurant-display').html('<h4 class="error">Please input an address</h4>')
    } else {
      var queryURL = 'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=delivery&street-address=' +
      queryAddress + '&access-token=e4d79c106ba7c4b2'
      $.ajax({
        url: queryURL,
        method: 'GET'
      }).done(function (response) {
        console.log(response)
        var results = response.restaurants
        if (results < 1) {
          $('.restaurant-display').html('<h5>No restaurants in range. Sorry!</h5>')
        } else {
          $('.restaurant-display').append('Showing results for: ' + queryAddress)
        }
        // Runs through response array
        for (var i = 0; i < results.length; i++) {
          if (results[i].open === true) {
            // Creates container for restaurants
            var restaurantDiv = $('<div class="small-12 columns restaurant">')
            var restaurantName = results[i].name
            restaurantDiv.attr('data-apiKey', results[i].apiKey)
            console.log(restaurantDiv)
            var p1 = $('<p>').text(restaurantName)
            // Pulls image for logo
            var restaurantLogo = $('<img>')
            restaurantLogo.attr('src', results[i].logoUrl)
            restaurantLogo.attr('class', 'restaurant-logo')
            // Pulls address for display
            var restaurantAddress = results[i].streetAddress
            var restaurantCity = results[i].city
            var restaurantState = results[i].state
            var restaurantZip = results[i].zip
            // figure out how to display hours
            // var restaurantHours = results[i].hours
            // restaurantHours.toString()
            // console.log('-----------')
            // console.log(restaurantHours)
            // var hours = []
            // hours.push(restaurantHours)
            // console.log('-----------')
            // console.log(hours)
            var deliveryMin = parseFloat(results[i].deliveryMin)
            var deliveryFee = parseFloat(results[i].deliveryPrice)
            var minWait = results[i].minWaitTime
            var maxWait = results[i].maxWaitTime
            var deliveryTimeframe = $('<p>').text('Estimated wait time: ' + minWait + '-' + maxWait + 'minutes')
            var orderLink = results[i].url
            var orderButton = $('<a class="button secondary order-button">').text('Order Here')
            orderButton.attr('href', orderLink)
            var restaurantType = results[i].foodTypes
            var p2 = $('<p>').text(restaurantAddress + ', ' + restaurantCity + ', ' + restaurantState + ', ' + restaurantZip)
            var p3 = $('<p>').text(restaurantType)
            // for (var j = 0; j < hours.length; j++) {
            //   var p4 = $('<p>').text(hours[j])
            // }
            var deliveryDetails = $('<p>').text('Delivery Minimum: $' + deliveryMin + ', ' + 'Delivery Fee: $' + deliveryFee)
            var restaurantContact = results[i].phone
            var phoneNumber = $('<p>').text(restaurantContact)
            restaurantDiv.append(orderButton)
            restaurantDiv.append(p1)
            restaurantDiv.prepend(restaurantLogo)
            restaurantDiv.append(deliveryDetails)
            restaurantDiv.append(deliveryTimeframe)
            restaurantDiv.append(phoneNumber)
            restaurantDiv.append(p2)
            restaurantDiv.append(p3)
            // append hours here
            // restaurantDiv.append(p4)
            $('.restaurant-display').append(restaurantDiv)
            $('#address-input').val('')
          }
        }
      })
    }
  })
})
