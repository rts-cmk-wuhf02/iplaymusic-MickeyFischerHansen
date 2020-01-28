const ClientID = "726f1993fb0348448a3e99ce80eca1a4";
const ClientSecret = "11c665492c43438f896dd25ffdb3222c";
const key = btoa(ClientID + ":" + ClientSecret)

console.log(key);

fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic NzI2ZjE5OTNmYjAzNDg0NDhhM2U5OWNlODBlY2ExYTQ6MTFjNjY1NDkyYzQzNDM4Zjg5NmRkMjVmZmRiMzIyMmM="
        },
        body: "grant_type=client_credentials"
    })
    .then(
        response=> response.json()
    )
    .then(data=>{
        let accessToken = data.access_token
        fetch('',{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
          console.log(req.albums) 
          req.albums.forEach(element => {
              console.log(element.images)
              const templatefeature = document.querySelector('#template-feature');
              const placer = document.querySelector('.img__wrapper');
              const clone = templatefeature.content.cloneNode(true)
                clone.querySelector('.section__img').src = element.images[0].url
                placer.appendChild(clone)
            })
        });

    });