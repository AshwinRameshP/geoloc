document.getElementById("bt1").addEventListener("click",getPosition);
function getPosition(){
    var watchID=navigator.geolocation.getCurrentPosition(onSuccess,onError);
    
    function onSuccess(position){
alert("Latitude:" + position.coords.latitude+"\n"+"Longitude:"+position.coords.longitude+"\n");
        
window.open("https://www.latlong.net/c/?lat="+position.coords.latitude+"&long="+position.coords.longitude)
    }
    function onError(error){
        alert('code: '+error.code+ "\n"+ "message:"+error.message+"\n");
    }
    
}