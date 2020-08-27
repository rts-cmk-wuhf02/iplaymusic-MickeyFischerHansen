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
    req.playlists.items.forEach(function (element) {
      console.log(element.images);
      var templatefeature = document.querySelector('#template-feature');
      var placer = document.querySelector('.main_section');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      clone.querySelector(".a-tag").href = "/albums-details?album=".concat(element.id);
      placer.appendChild(clone);
    }); //    const featuredmain = document.querySelector('.featuredmain')
    //    featuredmain.innerHTML = `
    //    <section class="main_section">
    //      <h1 class="section__h1">Featured</h1>
    //  <figure class="img__wrapper">
    //  <img class="section__img" src="${req.playlists.items[0].images[0].url}" alt="">
    //      <h1 class="img__h1">${req.playlists.items[0].name}</h1>
    //      <h3 class="img__h3">Soundtrack</h3>
    //  </figure>
    //  </section>
    //    `
    // req.playlists.forEach(element => {
    //     console.log(element)
    //     element.forEach(item=>{
    //         console.log(item)
  });
}); //req.playlists.forEach(element => {
//   console.log(element)
//   element.forEach(item=>{
//       console.log(item)