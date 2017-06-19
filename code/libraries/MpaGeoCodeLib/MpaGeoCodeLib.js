/* 
1. User can pass the location in the form of parameters "lat" and "long" using the platform. 
2. Make a call to this method by passing a json of the format Maptesting({lat:31.34,long:12.23})
*/




function Maptester(lati, longi, callback){
        var DEFAULT_LAT = 30.2672;
        var DEFAULT_LONG = -97.7431;
        
        location = {

            lat:lati || DEFAULT_LAT,

            long:longi || DEFAULT_LONG

        }

        var geocodingKey = "<GEO-ENCODING_KEY>";

        var requestObject = Requests();

        var options = {

            uri: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+location.lat+","+location.long+"&key="+geocodingKey,

            method: 'GET',

            headers: {

                'Content-Type': 'application/json; charset=utf-8'

                // 'Accept': 'application/json'

            }

        };
        /* function callback(err, data){
        // do you stuff
        if (err) {
            resp.error("you have an error: "+err);
        }
        else {
            resp.success("we have got data");
        }*/
        // then resp.success or resp.error
    
        log("almost at the end");
        requestObject.post(options, callback);
}
