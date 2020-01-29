"use strict";

var sku = new URLSearchParams(document.location.search).get('albums');
console.log(sku);
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
  fetch('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.albums);
    req.albums.forEach(function (element) {
      console.log(element.images);
      var templatefeature = document.querySelector('#template-feature');
      var placer = document.querySelector('.img__wrapper');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      placer.appendChild(clone);
    });
  });
  fetch('https://api.spotify.com/v1/browse/new-releases?country=SE', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.albums.items[0]);
    req.albums.items.forEach(function (element) {
      var templatealbums = document.querySelector('#album-play');
      var placer2 = document.querySelector('.section__wrapper');
      var clone = templatealbums.content.cloneNode(true);
      clone.querySelector('.play__img').src = element.images[0].url;
      clone.querySelector(".section__div-h3").innerText = element.name;
      clone.querySelector(".section__div-p").innerText = element.artists[0].name;
      clone.querySelector(".section__div-p2").innerText = element.total_tracks;
      clone.querySelector(".a-tag").href = "/albums-details?album=".concat(element.id);
      placer2.appendChild(clone);
    });
  });
});