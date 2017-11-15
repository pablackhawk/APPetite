$(document).ready(function () {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.postmates.com/v1/delivery_zones",
  "method": "GET",
  "headers": {
    "authorization": "Basic ZWZmY2RhOTItZWNjMy00ZGI2LWI5NTQtZjhkOTE0ZTA5NGQ5Og==",
    "cache-control": "no-cache",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});