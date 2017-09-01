// a //
document.getElementById("div1").addEventListener("click", sayHi);
document.getElementById("div2").addEventListener("click", sayHi);

// b //
document.getElementById("outer").addEventListener("click", function(argument)
{
    console.log("this id: " + this.id);
    console.log("target id: " + argument.target.id);
});

function sayHi()
{
    console.log("Hi from " + this.id);
}

// 3  //
document.getElementById("div1").addEventListener("click", sayHiNew);
document.getElementById("div2").addEventListener("click", sayHiNew);

document.getElementById("outer").addEventListener("click", function(arg)
{
    document.getElementById("p1").innerText = "this id: " + this.id + ", " + "target id: " + arg.target.id;
});

function sayHiNew()
{
    document.getElementById("p1").innerText = "Hi from " + this.id;
}

// 4 //
document.getElementById("insert").innerHTML = "<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li></ul>"; // a //

var insertDiv = document.getElementById("insert");

document.getElementById("name_submit").addEventListener("click", function(arg)
{
    arg.preventDefault();
    var fieldContent = insertDiv.innerHTML;
    fieldContent = fieldContent.substring(0, fieldContent.length - 5);
    fieldContent += "<li>" + document.getElementById("name_input").value + "</li></ul>";
    insertDiv.innerHTML = fieldContent;
    document.getElementById("name_input").value = "";
});

document.getElementById("remove_first").addEventListener("click", function(arg)
{
    arg.preventDefault();
    var fieldContent = insertDiv.innerHTML;
    fieldContent = fieldContent.substring(fieldContent.indexOf("</li>") + 5, fieldContent.length);
    insertDiv.innerHTML = "<ul>" + fieldContent;
});

document.getElementById("remove_last").addEventListener("click", function(arg)
{
    arg.preventDefault();
    var fieldContent = insertDiv.innerHTML;
    fieldContent = fieldContent.substring(0, fieldContent.lastIndexOf("<li>")) + "</ul>";
    insertDiv.innerHTML = fieldContent;
});

// 5 //
var cars = 
[
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function makeTableFromArray(array)
{
    var tableString = "<table class='table'><thead><tr><td>id</td><td>Year</td><td>Make</td><td>Model</td><td>Price</td></tr></thead><tbody>"
    for (i = 0; i < array.length; i++)
    {
        tableString += "<tr><td>" + cars[i].id + "</td><td>" + cars[i].year + "</td><td>" + cars[i].make + "</td><td>" + cars[i].model + "</td><td>" + cars[i].price + "</td></tr>";
    }
    return tableString + "</tbody></table>";
}

document.getElementById("table_container").innerHTML = makeTableFromArray(cars);

document.getElementById("table_submit").addEventListener("click", function(arg)
{
    arg.preventDefault();
    var number = document.getElementById("table_input").value
    var filtered = cars.filter(function(element)
        {
            if (element.price < number)
                return true;
            return false;
        });
    document.getElementById("table_container").innerHTML = makeTableFromArray(filtered);
});