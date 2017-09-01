// Callback exercises //

// 1 //
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var longNames = names.filter(function(name)
{
    return name.length > 3;
});

names.forEach(function(element) 
{
    console.log(element);
}, this);

longNames.forEach(function(element) 
{
    console.log(element);
}, this);

// 2 //
var namesUpper = names.map(function(element)
{
    return element.toUpperCase();
});

// 3 //
function arrayToUL(array)
{
    var html = "<ul>";
    for (i = 0; i < array.length; i++)
    {
        html += "</li>" + array[i] + "</li>";
    }

    return html + "</ul>";
}

console.log(arrayToUL(names));

// 4 //
var cars = 
[
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function filterWithArguments()
{

}

// 5 //
