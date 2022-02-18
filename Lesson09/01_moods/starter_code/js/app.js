//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded',function(e) {
    // Create a function that runs whenever the submit button is clicked
    function processTheMood(e){
        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called moodvalue and get the value of the #mood input
        let moodValue = document.querySelector("#mood").value;

        //Correct for capitalization
        moodValue = moodValue.toLowerCase().trim();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if (moodValue=="excited" || moodValue=="ecstatic" || moodValue=="fantastic"){
            document.querySelector(".moodring > div").setAttribute("class","excited");
        } 
        // if the user inputs happy/good/great change the CSS class to 'happy'
        if (moodValue=="happy" || moodValue=="good" || moodValue=="great"){
            document.querySelector(".moodring > div").setAttribute("class","happy");
        } 
        // if the user inputs bad/angry change the CSS class to 'bad'
        if (moodValue=="bad" || moodValue=="angry"){
            document.querySelector(".moodring > div").setAttribute("class","bad");
        } 
    // Listen for user interaction on the submit button.
    };
    document.querySelector("#submit-btn").addEventListener("click",processTheMood);

});