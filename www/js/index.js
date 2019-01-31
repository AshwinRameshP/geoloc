document.getElementById("bt1").addEventListener("click", getPosition);
document.getElementById("bt2").addEventListener("click", getMap);
function getPosition() {
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess,onError);
    
    function onSuccess(position) {
alert("Latitude:" + position.coords.latitude+"\n"+"Longitude:"+position.coords.longitude+"\n");
            }
    function onError(error){
        alert('code: '+error.code+ "\n"+ "message:"+error.message+"\n");
    }
    
}
function getMap() {
    var watchID=navigator.geolocation.getCurrentPosition(onSuccess,onError);
    
    function onSuccess(position){

window.location="https://www.latlong.net/c/?lat="+position.coords.latitude+"&long="+position.coords.longitude;  
    }
    function onError(error){
        alert('code: '+error.code+ "\n"+ "message:"+error.message+"\n");
    }
    
}