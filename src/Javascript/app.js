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
        fetch('https://api.spotify.com/v1/browse/featured-playlists',{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
           console.log(req.playlists.element) 

           const itemTemplate = document.getElementById("featuredTemplate")
           console.log(itemTemplate);
           req.forEach(item => {

            clone.querySelector(".section__img").src = item.name[0];
            
            
   
                         
             });

           //req.playlists.forEach(element => {
            //   console.log(element)
            //   element.forEach(item=>{
            //       console.log(item)
               });
           });
    
        