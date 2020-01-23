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
    console.log(req.playlists.element);
    var itemTemplate = document.getElementById("featuredTemplate");
    console.log(itemTemplate);
    req.forEach(function (item) {
      clone.querySelector(".section__img").src = item.name[0];
    }); //req.playlists.forEach(element => {
    //   console.log(element)
    //   element.forEach(item=>{
    //       console.log(item)
  });
});