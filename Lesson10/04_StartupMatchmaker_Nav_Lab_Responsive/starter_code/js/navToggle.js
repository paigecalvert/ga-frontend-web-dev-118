document.addEventListener('DOMContentLoaded', function(event) {
    // On hamburger click
    document.querySelector("#nav-toggle").addEventListener("click",function(e){
        //prevent the link from working
        e.preventDefault();

        // add or remove the mobile hide class
        document.querySelector(".main-nav").classList.toggle('main-nav-mobilehide');
    }
    
    )
        

});