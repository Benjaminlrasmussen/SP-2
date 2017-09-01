var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

var divs = document.getElementsByTagName("div");
for (i = 0; i < divs.length; i++)
{
    divs[i].style.backgroundColor = "green";
}

document.getElementById("button1").addEventListener("click", function()
{
    div1.style.backgroundColor = "grey";
    div2.style.backgroundColor = "red";
    div3.style.backgroundColor = "blue";
});