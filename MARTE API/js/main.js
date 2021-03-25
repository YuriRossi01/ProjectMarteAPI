var pageCounter = 1;
var animalContainer = document.getElementById("users-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }

  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";


    htmlString += '<img src="' + data.photos[1].img_src;


    htmlString += '">';
    htmlString += '<img src="' + data.photos[150].img_src;


    htmlString += '">';
    htmlString += '<img src="' + data.photos[50].img_src;


    htmlString += '">';


console.log(htmlString);
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
