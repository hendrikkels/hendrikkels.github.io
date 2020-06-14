function drik(){
    fetch("https://api.ipify.org/?format=json")
        .then(results => results.json())
        .then(data => console.log(data.ip));
    var number = data.ip;
    document.getElementById("myText").innerHTML = number;
}
