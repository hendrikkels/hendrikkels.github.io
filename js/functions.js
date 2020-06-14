function getIP(){
    fetch("https://api.ipify.org/?format=json")
        .then(results => results.json())
        .then((json) => {
            return document.getElementById("ip_address").innerHTML = json.ip;
        })
}

function getLocation() {

}
