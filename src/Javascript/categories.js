document.addEventListener("DOMContentLoaded", ()=>{
    let category = document.querySelectorAll(".categories")
    let eksempel = document.querySelector("#eksempel")
    let inner = document.querySelector(".artickle-categories-hide")
    category.forEach(element => {
        element.addEventListener('click',() =>{
            inner.innerHTML = `
                 
 <article class="artickle-categories artickle-categories-hide">
                 <section class="categories-show">
        <p  class="categories-text">Acoustic Blues</p>
        <i class="fas fa-ellipsis-h categories-white"></i>
       </section>
  
       <section class="categories-show">
          <p  class="categories-text">Blues Rock</p>
          <i class="fas fa-ellipsis-h categories-white"></i>
         </section>
  
         <section class="categories-show">
          <p  class="categories-text">Canadian blues</p>
          <i class="fas fa-ellipsis-h categories-white"></i>
         </section>
  
         <section class="categories-show">
          <p  class="categories-text">Jazz Blues</p>
          <i class="fas fa-ellipsis-h categories-white"></i>
         </section>
  
         <section class="categories-show">
          <p  class="categories-text">Piano Blues</p>
          <i class="fas fa-ellipsis-h categories-white"></i>
         </section>
  
         <section class="categories-show">
          <p  class="categories-text">Soul Blues</p>
          <i class="fas fa-ellipsis-h categories-white"></i>
         </section>
  
         <section class="categories-show">
          <p  class="categories-text">Swamp Blues</p>
          <i class="fas fa-ellipsis-h categories-white"></i>
         </section>
              
 </article>`
         
         eksempel.addEventListener("click", ()=>{
            inner.innerHTML = ``
        })
        })
    });

})