function displayCoordinates(coordinates){
    document.getElementById("info").innerHTML =
    "Latitude: " + coordinates.coords.latitude + "<br>" +
    "Longitude: " + coordinates.coords.longitude
    document.getElementById("myLink").setAttribute("href",
    "http://openaccess.pf.api.met.ie/metno-wdb2ts/locationforecast?lat=" + coordinates.coords.latitude +
    ";long=" + coordinates.coords.longitude)
}
function requestXML(){
    if (this.readyState == 4) {
        document.getElementById("response").innerHTML =
        this.responseText
        
    }
}
navigator.geolocation.getCurrentPosition(displayCoordinates)
var myXhttp = new XMLHttpRequest
myXhttp.onreadystatechange = requestXML()
myXhttp.open("GET", "http://openaccess.pf.api.met.ie/metno-wdb2ts/locationforecast?lat=54.7210798611;long=-8.7237392806", true)
myXhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
myXhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
myXhttp.send()
