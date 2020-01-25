"use strict";

var ClientID = "726f1993fb0348448a3e99ce80eca1a4";
var ClientSecret = "11c665492c43438f896dd25ffdb3222c";
var key = btoa(ClientID + ":" + ClientSecret);
console.log(key);
fetch('https://accounts.spotify.com/api/token', {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic NzI2ZjE5OTNmYjAzNDg0NDhhM2U5OWNlODBlY2ExYTQ6MTFjNjY1NDkyYzQzNDM4Zjg5NmRkMjVmZmRiMzIyMmM="
  },
  body: "grant_type=client_credentials"
}).then(function (response) {
  return response.json();
}).then(function (data) {
  var accessToken = data.access_token;
  fetch('https://api.spotify.com/v1/browse/featured-playlists', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.playlists.items);
    var featuredmain = document.querySelector('.featuredmain');
    featuredmain.innerHTML = "\n           <section class=\"main_section\">\n             <h1 class=\"section__h1\">Featured</h1>\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"".concat(req.playlists.items[0].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[0].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[1].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[1].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[2].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[2].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[3].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[3].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[4].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[4].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[5].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[5].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[6].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[6].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[7].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[7].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[8].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[8].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[9].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[9].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[10].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[10].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n\n         <figure class=\"img__wrapper\">\n         <img class=\"section__img\" src=\"").concat(req.playlists.items[11].images[0].url, "\" alt=\"\">\n             <h1 class=\"img__h1\">").concat(req.playlists.items[11].name, "</h1>\n             <h3 class=\"img__h3\">Soundtrack</h3>\n         </figure>\n             \n         </section>\n           "); // req.playlists.forEach(element => {
    //     console.log(element)
    //     element.forEach(item=>{
    //         console.log(item)
  });
}); //req.playlists.forEach(element => {
//   console.log(element)
//   element.forEach(item=>{
//       console.log(item)