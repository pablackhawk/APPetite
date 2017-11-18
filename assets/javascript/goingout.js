$(document).ready(function(){

       function getData(zipCode){
            let url = "http://opentable.herokuapp.com/api/restaurants?zip=" + zipCode;
            fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
                $("#test").text(JSON.stringify(data));
            });
       }

       $("#submitZipcode").on("click", function(){
           var zipCode = $("#zipcodeInput").val().trim()
           getData(zipCode);
       })


     
       

    });
//Document ready closing tag