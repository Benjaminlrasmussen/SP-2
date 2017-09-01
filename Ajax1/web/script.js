var jokeDiv = document.getElementById("joke_div");

function fetchNewJoke()
{
    fetch("https://jokes-plaul.rhcloud.com/api/joke", { method: 'get' }).then(function (response) {
        return response.json();
    }).then(function (text) {
        jokeDiv.innerText = text.joke;
    });

    console.log("doing it");
}

fetchNewJoke();
document.getElementById("new_joke_button").addEventListener("click", fetchNewJoke);

setInterval(fetchNewJoke, 3600000);