var tableBody = document.getElementById("tblbody");
var amount = document.getElementById("amount");
var gender = document.getElementById("gender");
var region = document.getElementById("region");

function tableCreator(json)
{
    var html = "";
    for (var key in json)
    {
        html += "<tr>";
        html += "<td>" + json[key].name; + "</td>";
        html += "<td>" + json[key].surname; + "</td>";
        html += "<td>" + json[key].gender; + "</td>";
        html += "</tr>";
    }
    tableBody.innerHTML = html;
    console.log("Running");
}

function updateTable()
{
    fetch("http://uinames.com/api/?amount=" + amount.value + "&region=" + region.value + "&gender=" + gender.value, {method: "get"}).then(function(response)
    {
        return response.json();
    }).then(function(json){
        tableCreator(json);
    });
}

document.getElementById("btnsend").onclick = updateTable;