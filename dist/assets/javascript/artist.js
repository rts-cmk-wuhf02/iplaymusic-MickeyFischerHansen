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
  fetch('https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin,7uaIm6Pw7xplS8Dy06V6pT,7dGJo4pcD2V6oG8kP0tJRR,6qqNVTkY8uBg9cP3Jd7DAH', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.artists);
    req.artists.forEach(function (element) {
      console.log(element.images);
      var templatefeature = document.querySelector('#template-feature');
      var placer = document.querySelector('.img__wrapper');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      placer.appendChild(clone);
    });
  });
  fetch('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.tracks[0]);
    req.tracks.forEach(function (element) {
      var templatealbums = document.querySelector('#template2');
      var placer2 = document.querySelector('.img__wrapper2');
      var clone = templatealbums.content.cloneNode(true);
      clone.querySelector('.img__1').src = element.album.images[0].url;
      clone.querySelector(".figcaption_text").innerText = element.album.name;
      placer2.appendChild(clone);
    });
  });
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