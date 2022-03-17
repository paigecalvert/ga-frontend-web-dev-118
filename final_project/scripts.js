document.addEventListener('DOMContentLoaded', function(event) {

// Return a book from the API and display the results
function selectBook(jsonData){
    
    let books = jsonData.items;
    
    // console.log(jsonData);
    // console.log(books);

    let randomNum = Math.floor(Math.random() * books.length);
    console.log(randomNum);

    //assign the title
    let newBookTitle = books[randomNum].volumeInfo.title;
    document.querySelector('#book-title').innerText = newBookTitle;
    console.log(newBookTitle);

    //assign the author
    let newBookAuthor;
    if (books[randomNum].volumeInfo.authors == null){
        newBookAuthor = books[randomNum].volumeInfo.authors[0];
        console.log(newBookAuthor);
    }else {
        newBookAuthor = "";
    }
    document.querySelector('#book-author').innerText = newBookAuthor;

    //assign the description
    let newBookDescription;
    // if there is no description, prevent it from saying "undefined" on the screen
    if (books[randomNum].volumeInfo.description !==null && books[randomNum].volumeInfo.description !==undefined){
        newBookDescription = books[randomNum].volumeInfo.description;
    }else {
        newBookDescription = books[randomNum].volumeInfo.subtitle;
    }
    document.querySelector('#book-desc').innerText = newBookDescription;
    document.querySelector('#book-desc-mobile').innerText = newBookDescription;

    // assign the image and alt text
    let newBookImage = books[randomNum].volumeInfo.imageLinks.thumbnail;
    document.querySelector('#book-image').setAttribute('src',newBookImage);
    document.querySelector('#book-image').setAttribute('alt',newBookTitle+" cover");

    //assign the link to buy the book
    let newBookPurchaseLink = books[randomNum].volumeInfo.infoLink;
    document.querySelector('#cta-buy').setAttribute('href',newBookPurchaseLink);

    //show the results div
    document.querySelector('#book-result').classList.replace('book-result-off','book-result-on');

}

// Call the google books API and get a random result when they click Surprise Me

    document.querySelector("#cta-surprise").addEventListener('click',function(e){
        e.preventDefault;

        let randomNum = Math.floor(Math.random() * 5);

        let APICall;

        if (randomNum == 0){
            //give fiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (randomNum == 1){
            //give nonfiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (randomNum == 2){
            //give mystery
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (randomNum == 3){
            //give history
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:history&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else {
            //give biography
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:biography&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }

        fetch(APICall)
            .then(responseData => responseData.json())
            .then(jsonData => selectBook(jsonData))
            .catch(function(error){
                console.log("There is an error.", error);
            }) 
    });

    // CHOOSE A GENRE
    document.querySelector("#cta-dropdown").addEventListener('change',function(){
        //create variable for the selected genre
        let genre = this.value;

        let APICall;
    
        // let APICall = "https://www.googleapis.com/books/v1/volumes?q=";
        // const APIKey = "AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M"
        // let langRestrict = "langRestrict=en";
        // let subject;

        //change API call depending on the category they choose
    
        if (genre == 0){
            //give fiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
            // subject = 'subject:fiction';
            // APICall = APICall + subject + "&key=" + APIKey;
            // console.log(APICall);
            
        }else if (genre == 1){
            //give nonfiction
            //let subject = "nonfiction";
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 2){
            //give mystery
            //let subject = "mystery";
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 3){
            //give history
            //let subject = "history";
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:history&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 4) {
            //give biography
            //let subject = "biography";
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:biography&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }

        fetch(APICall)
            .then(responseData => responseData.json())
            .then(jsonData => selectBook(jsonData))
            .catch(function(error){
                console.log("There is an error.", error);
            })
    });
});