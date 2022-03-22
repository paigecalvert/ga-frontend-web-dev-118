document.addEventListener('DOMContentLoaded', function(event) {

//Given a genre, return an API call    
function createApiCall(genre){
        //create variables for the api call
        let apiCall = "https://www.googleapis.com/books/v1/volumes?q=";
        const apiKey = "AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M"
        const langRestrict = "langRestrict=en";
        const printType = "printType=books";
        const orderBy = "orderBy=relevance"
        let q;
    
        //change the api call depending on genre
    
        if (genre == 0){
            //show graphic novels
            q = "graphic novel";
        }else if (genre == 1){
            //show biography
            q = "biography";
        }else if (genre == 2){
            //show mystery
            q = "mystery";
        }else if (genre == 3){
            //show history
            q = "history";
        }else if (genre == 4) {
            //show sci-fi
            q = "science fiction";
        }else if (genre == 5) {
            //show fantasy
            q = "fantasy"
        } 
    
        apiCall = apiCall + q + "&" + langRestrict + "&" + printType + "&" + orderBy + "&key=" + apiKey;

        return apiCall;
}

// Given JSON response data, select a book and display it
function selectBook(jsonData){
    
    let books = jsonData.items;

    let randomNum = Math.floor(Math.random() * books.length);

    //assign the title
    let newBookTitle = books[randomNum].volumeInfo.title;
    document.querySelector('#book-title').innerText = newBookTitle;

    //assign the author
    if (books[randomNum].volumeInfo.authors !== null){
        let newBookAuthor = books[randomNum].volumeInfo.authors[0];
        document.querySelector('#book-author').innerText = newBookAuthor;
    }else {
        let newBookAuthor = "No author provided.";
        document.querySelector('#book-author').innerText = newBookAuthor;
    }
    

    //assign the link to buy the book, and to read more in the description
    let newBookPurchaseLink = books[randomNum].volumeInfo.infoLink;
    document.querySelector('#cta-buy').setAttribute('href',newBookPurchaseLink);

    //assign the description
    
    if (books[randomNum].volumeInfo.description !==null && books[randomNum].volumeInfo.description !==undefined){
        let newBookDescription = books[randomNum].volumeInfo.description;

        document.querySelector('#book-desc').innerText = newBookDescription;
        document.querySelector('#book-desc-mobile').innerText = newBookDescription;
        document.querySelector('#book-desc-read-more').setAttribute('href',newBookPurchaseLink);

    }else if (books[randomNum].volumeInfo.subtitle !==null && books[randomNum].volumeInfo.subtitle !==undefined) {
        let newBookDescription = books[randomNum].volumeInfo.subtitle;

        document.querySelector('#book-desc').innerText = newBookDescription;
        document.querySelector('#book-desc-mobile').innerText = newBookDescription;
        document.querySelector('#book-desc-read-more').setAttribute('href',newBookPurchaseLink);

    }else {
        let newBookDescription = "No description provided."
        document.querySelector('#book-desc').innerText = newBookDescription;
        document.querySelector('#book-desc-mobile').innerText = newBookDescription;
        document.querySelector('#book-desc-read-more').setAttribute('href',newBookPurchaseLink);
    }
    

    // assign the image and alt text
    let newBookImage = books[randomNum].volumeInfo.imageLinks.thumbnail;
    document.querySelector('#book-image').setAttribute('src',newBookImage);
    document.querySelector('#book-image').setAttribute('alt',newBookTitle+" cover");

    //show the results div
    document.querySelector('#book-result').classList.replace('book-result-off','book-result-on');

}

// When the user click Surprise Me, pass a random genre to the createApiCall function
document.querySelector("#cta-surprise").addEventListener('click',function(e){
    e.preventDefault;

    // choose a random genre
    let g = Math.floor(Math.random() * 6);

    //create api call based on genre
    fetch(createApiCall(g))
        .then(responseData => responseData.json())
        // select and display the result
        .then(jsonData => selectBook(jsonData))
        .catch(function(error){
            console.log("There is an error.", error);
        }) 
});

// When the user chooses a genre, read the selected genre and pass it to the createApiCall function
document.querySelector("#cta-dropdown").addEventListener('change',function(){
    //set a variable equal to whichever option they click on
    let g = this.value;

    //create api call based on genre
    fetch(createApiCall(g))
        .then(responseData => responseData.json())
        // select and display the result
        .then(jsonData => selectBook(jsonData))
        .catch(function(error){
        console.log("There is an error.", error);
        })
        
});

})