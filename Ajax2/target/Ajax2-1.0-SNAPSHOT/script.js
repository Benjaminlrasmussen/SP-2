var timeDiv = document.getElementById("time_div");

function fetchTime()
{
    fetch("http://localhost:8080/Ajax2/Controller", {method: "get"}).then(function(response) {

    return response.text();
    }).then (function(text){
        timeDiv.innerText = text;
    });
}

setInterval(fetchTime, 1000);