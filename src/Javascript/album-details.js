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
        let album = new URLSearchParams(document.location.search).get("album");
        fetch(`https://api.spotify.com/v1/albums/${album}/tracks?`,{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
          console.log(req) 
          req.items.forEach(element => {
              
                const albumdeatils = document.querySelector('#template-albumdeatils');
                const placer = document.querySelector('.main__section');
                const clone = albumdeatils.content.cloneNode(true)
                //clone.querySelector('.pølse').src = element.images[0].url
                clone.querySelector('.playlist_songname').innerText = element.name
                clone.querySelector('.playlist_artist').innerText = element.artists[0].name
                clone.querySelector('.playlist_timelength').innerText = millisToMinutesAndSeconds(element.duration_ms)
               
                placer.appendChild(clone)
                
            })
        });
    });
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
