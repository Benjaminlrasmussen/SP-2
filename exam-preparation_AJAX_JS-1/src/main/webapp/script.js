var svgContainer = document.getElementById("svg2");
var div = document.getElementById("text_container");

svgContainer.addEventListener("click", function (arg)
{
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + arg.target.id, {method: "get"}).then(function (response)
    {
        return response.json();
    }).then(function (json)
    {
        for (var key in json)
        {
            console.log(json.text());
        }
    });
});



