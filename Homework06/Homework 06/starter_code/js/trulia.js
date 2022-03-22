

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

  // Toggle the navigation
  document.querySelector(".trulia-nav-toggle").addEventListener("click",function(e){
    e.preventDefault();
    let navSet = document.querySelectorAll(".trulia-nav > nav ul");
    //console.log(navSet); prints the navSet

    for(let i=0;i<navSet.length;i++){
      navSet[i].classList.toggle("trulia-nav-mobilehide");
    }
  });


  for (let i = 0; i < truliaCards.length; i++){
    
    // Add a click listener on each card
    truliaCards[i].addEventListener('click',function(){
        
        // Remove the featured class
        for (let q = 0; q < truliaCards.length; q++){
            truliaCards[q].classList.remove('trulia-featured-grid-item');
        } 
  
        // Add the featured class on the one clicked on
        this.classList.add('trulia-featured-grid-item');
    });
  }


  });  



