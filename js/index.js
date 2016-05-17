// APIKEY: 750982d2c7862523e6b6e869e7ae5489
// API call:
// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// http://api.openweathermap.org/data/2.5/weather?q=Praia%20Grande&APPID=750982d2c7862523e6b6e869e7ae5489


    function getLocation(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                var jsonLocation = data.coords.latitude+','+data.coords.longitude;
                callback(jsonLocation);
            });
        }
        
    }
    
    getLocation(alert);
    
    // var getLocation = function(callback){
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             var location = {"latitude": position.coords.latitude, "longitude": position.coords.longitude};
    //             callback(location);
    //         });
    //     }
    // }

    // var showLocation = function(location){
    //     console.log("LATITUDE -> " + location.latitude);
    //     console.log("LONGITUDE -> " + location.longitude);
    // }
    
    // getLocation(showLocation);


