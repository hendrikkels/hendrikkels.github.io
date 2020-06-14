function drik(){
    fetch("https://api.ipify.org/?format=json")
        .then(results => results.json())
        .then((json) => {
            return document.getElementById("myText").innerHTML = json.ip;
        })

}
