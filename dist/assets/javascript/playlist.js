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
  fetch('https://api.spotify.com/v1/browse/featured-playlists?country=SE&limit=2', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.playlists);
    req.playlists.items.forEach(function (element) {
      console.log(element.images);
      var templatefeature = document.querySelector('#playlists-template');
      var placer = document.querySelector('.section__section');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.img__section').src = element.images[0].url;
      placer.appendChild(clone);
    });
  });
  fetch('https://api.spotify.com/v1/browse/new-releases?country=Dk', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.albums.items[0]);
    req.albums.items.forEach(function (element) {
      var templateplaylist = document.querySelector('#featured-playlists');
      var placer2 = document.querySelector('.section__wrapper-album');
      var clone = templateplaylist.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      clone.querySelector('.a-tag').href = "/albums-details?album=".concat(element.id);
      clone.querySelector('.section__div-p2-album').innerText = element.total_tracks;
      clone.querySelector('.section__div-h3-album').innerText = element.name;
      clone.querySelector('.section__div-p-album').innerText = element.artists[0].name;
      placer2.appendChild(clone);
    });
  });
});