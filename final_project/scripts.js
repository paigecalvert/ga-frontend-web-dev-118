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
        }else {
            //otherwise, search for my favorite book
            q="Devil in the white city";
        }
    
        apiCall = apiCall + q + "&" + langRestrict + "&" + printType + "&" + orderBy + "&key=" + apiKey;

        return apiCall;
}

// Given JSON response data, select a book and display it
function selectBook(jsonData){
    
    let books = jsonData.items;

    let randomNum = Math.floor(Math.random() * books.length);

    //assign properties; use .hasOwnProperty() to make sure each property exists in the JSON response

    //assign the title
    let newBookTitle;
    
    if (books[randomNum].volumeInfo.hasOwnProperty('title')==true){
        newBookTitle = books[randomNum].volumeInfo.title;
    }
    else {
        newBookTitle = "No title provided. Try again."
    }    
    document.querySelector('#book-title').innerText = newBookTitle;



    //assign the author
    let newBookAuthor;

    if (books[randomNum].volumeInfo.hasOwnProperty('authors')==true && Array.isArray(books[randomNum].volumeInfo.authors) == true){
        newBookAuthor = books[randomNum].volumeInfo.authors[0];
        
    }else {
        newBookAuthor = "No author provided.";
    }
    document.querySelector('#book-author').innerText = newBookAuthor;
    


    //assign the link to buy the book, and to read more in the description
    let newBookPurchaseLink;

    if (books[randomNum].volumeInfo.hasOwnProperty('infoLink')==true){
        newBookPurchaseLink = books[randomNum].volumeInfo.infoLink;
    }else {
        newBookPurchaseLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } 
    document.querySelector('#cta-buy').setAttribute('href',newBookPurchaseLink);
    document.querySelector('#book-desc-read-more').setAttribute('href',newBookPurchaseLink);



    //assign the description and related Read more link
    let newBookDescription;
    
    if (books[randomNum].volumeInfo.hasOwnProperty('description')==true){
        newBookDescription = books[randomNum].volumeInfo.description;

    }else if (books[randomNum].volumeInfo.hasOwnProperty('subtitle')==true) {
        newBookDescription = books[randomNum].volumeInfo.subtitle;

    }else {
        newBookDescription = "No description provided."   
    }
    document.querySelector('#book-desc').innerText = newBookDescription;
    document.querySelector('#book-desc-mobile').innerText = newBookDescription;
    
    

    // assign the image and alt text
    let newBookImage;
    let altText;

    if (books[randomNum].volumeInfo.hasOwnProperty('imageLinks')  == true){
        newBookImage = books[randomNum].volumeInfo.imageLinks.thumbnail;
        altText = newBookTitle+" book cover";
    }
    else {
        newBookImage = "open-book.png";
        altText = "Google open book emoji"
    }
    document.querySelector('#book-image').setAttribute('src',newBookImage);
    document.querySelector('#book-image').setAttribute('alt',altText);



    //show the results
    document.querySelector('#book-result').classList.replace('book-result-off','book-result-on');
}

// When the user click Surprise Me, pass a random genre to the createApiCall function
document.querySelector("#cta-surprise").addEventListener('click',function(e){
    e.preventDefault;

    //determine how many options there are in the genre dropdown
    let numberOfDropdownOptions = document.querySelectorAll('#cta-dropdown > option').length;

    //subtract 1 from the total number of options in the dropdown to account
    //for the extra "Choose a genre" option.
    // Let g = the value of a random option from the list
    let g = Math.floor(Math.random() * (numberOfDropdownOptions - 1));

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