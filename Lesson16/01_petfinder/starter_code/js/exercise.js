function selectPet(petType){

    // Get the specific pet data set

    // Set the title



    // Empty the specification data

    // Add the space required, size, weight
 
    // Add logic to add the trainability and lap size images


    // Add the foods (may require loop)
   

    // Update the images

  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for
    document.querySelector('.idealFor').innerHTML="";

    // Insert the ideal for
    var ideaForHTML = "";

    for(var i=0;i<thePet.idealOwner.length;i++){
        ideaForHTML +=
        "<li>" + thePet.idealOwner[i] + "</li>";
    }

    document.querySelector(".idealFor").innerHTML = ideaForHTML;

    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector(".myClass").addEventListener("change",function(){});
});






