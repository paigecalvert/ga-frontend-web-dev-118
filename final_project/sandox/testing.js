function createApiCall(genre){
    //create variables for the api call
    let apiCall = "https://www.googleapis.com/books/v1/volumes?q=";
    const apiKey = "AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M"
    const langRestrict = "langRestrict=en";
    const printType = "printType=books";
    let subject;

    //change the api call depending on genre

    if (genre == 0){
        //show fiction
        subject = "subject:fiction";
    }else if (genre == 1){
        //show nonfiction
        subject = "subject:nonfiction";
    }else if (genre == 2){
        //show mystery
        subject = "subject:mystery";
    }else if (genre == 3){
        //show history
        subject = "subject:history";
    }else if (genre == 4) {
        //show biography
        subject = "subject:biography";
    }else if (genre == 5) {
        //show fantasy
        subject = "subject:fantasy"
    } 

    apiCall = apiCall + subject + "&" + langRestrict + "&" + printType + "&key=" + apiKey;
    console.log(apiCall);
    return apiCall;
}

function selectBook(jsonData){
    
    let books = jsonData.items;
    console.log(books);

    let randomNum = Math.floor(Math.random() * books.length);
    console.log(randomNum);
}

document.querySelector("#cta-dropdown").addEventListener('change',function(){
    //set a variable equal to whichever option they click on
    let g = this.value;

    fetch(createApiCall(g))
        .then(responseData => responseData.json())
        .then(jsonData => selectBook(jsonData))
        .catch(function(error){
            console.log("There is an error.", error);
        })
    })        