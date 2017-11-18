$(document).ready(function(){

       function getData(zipCode){
            let url = "http://opentable.herokuapp.com/api/restaurants?zip=" + zipCode;
            fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                
                for (var i = 0; i < data.restaurants.length; i++){

                var restaurantsDiv = $("<div>");
                var picContainer = $("<img>");
                var photo = data.restaurants[i].image_url;
                var name = data.restaurants[i].name;
                var address = data.restaurants[i].address;
                var city = data.restaurants[i].city;
                var state = data.restaurants[i].state;
                var phone = data.restaurants[i].phone;
                var reservationLink = data.restaurants[i].mobile_reserve_url;          

                console.log(restaurantsDiv);
                picContainer.attr("src", photo);
                // photo.attr(height:100px; width: 100px)
                restaurantsDiv.append(picContainer);
                restaurantsDiv.append(name);
                restaurantsDiv.append(address);
                restaurantsDiv.append(city);
                restaurantsDiv.append(state);
                restaurantsDiv.append(phone);
                restaurantsDiv.append(reservationLink);

                $("#resturant-options").prepend(restaurantsDiv);

                }
            });
       }





       $("#submit-zipcode").on("click", function(){
           var zipCode = $("#zipcode-input").val().trim()
           getData(zipCode);
       })


     
       

    });
//Document ready closing tag