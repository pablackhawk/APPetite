$(document).ready(function(){

       function getData(zipCode){
            let url = "http://opentable.herokuapp.com/api/restaurants?zip=" + zipCode;
            fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                $("#mobile-url").text(JSON.stringify(data));
            });
       }

       $("#submit-zipcode").on("click", function(){
           var zipCode = $("#zipcode-input").val().trim()
           getData(zipCode);
       })


     
       

    });
//Document ready closing tag