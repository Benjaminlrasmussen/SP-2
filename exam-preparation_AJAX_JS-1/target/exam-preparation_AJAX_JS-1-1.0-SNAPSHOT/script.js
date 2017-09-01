var svgContainer = document.getElementById("svg2");
var div = document.getElementById("text_container");

svgContainer.addEventListener("click", function (arg)
{
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + arg.target.id.toString().split("-")[0], {method: "get"}).then(function (response)
    {
        return response.json();
    }).then(function (json)
    {
        var text = "";
        for (var key in json)
        {
            text += "Country: " + json[key].name + "\n";
            text += "Population: " + json[key].population + "\n";
            text += "Area: " + json[key].area + "\n";
            text += "Borders: " + json[key].borders;
        }
        div.innerText = text;
    });
});



