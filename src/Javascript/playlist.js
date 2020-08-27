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
        fetch('https://api.spotify.com/v1/browse/featured-playlists?country=SE&limit=2',{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
          console.log(req.playlists) 
          req.playlists.items.forEach(element => {
              console.log(element.images)
              const templatefeature = document.querySelector('#playlists-template');
              const placer = document.querySelector('.section__section');
              const clone = templatefeature.content.cloneNode(true)
                clone.querySelector('.img__section').src = element.images[0].url
                placer.appendChild(clone)
            
            
          });

          
        })

        fetch('https://api.spotify.com/v1/browse/new-releases?country=Dk',{
                            method: "GET",
                            headers: {
                                "Authorization" : "Bearer " + accessToken
                            }
                        })
                        .then(res=> res.json())
                        .then(req=>{
                          console.log(req.albums.items[0]) 
                          req.albums.items.forEach(element => {
                            const templateplaylist = document.querySelector('#featured-playlists');
                            const placer2 = document.querySelector('.section__wrapper-album');
                            const clone = templateplaylist.content.cloneNode(true)
                              clone.querySelector('.section__img').src = element.images[0].url
                              clone.querySelector('.a-tag').href = `/albums-details?album=${element.id}`
                              clone.querySelector('.section__div-p2-album').innerText = element.total_tracks
                              clone.querySelector('.section__div-h3-album').innerText = element.name
                              clone.querySelector('.section__div-p-album').innerText = element.artists[0].name
                            
                              placer2.appendChild(clone)
                  });
                });

    })