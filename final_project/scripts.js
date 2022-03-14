document.addEventListener('DOMContentLoaded', function(event) {

// Function to return a book and display the results:
function selectBook(jsonData){
    
    let books = jsonData.items;
    
    console.log(jsonData);
    console.log(books);
    console.log(books.length);

    let randomNum = Math.floor(Math.random() * books.length);

    let newBookTitle = books[randomNum].volumeInfo.title;
    document.querySelector('#book-title').innerText = newBookTitle;

    let newBookAuthor = books[randomNum].volumeInfo.authors[0];
    document.querySelector('#book-author').innerText = newBookAuthor;

    let newBookDescription;
    if (books[randomNum].volumeInfo.description !==null){
        newBookDescription = books[randomNum].volumeInfo.description;
    }else {
        newBookDescription = "";
    }
    document.querySelector('#book-desc').innerText = newBookDescription;
    document.querySelector('#book-desc-mobile').innerText = newBookDescription;

    let newBookImage = books[randomNum].volumeInfo.imageLinks.thumbnail;
    document.querySelector('#book-image').setAttribute('src',newBookImage);

    let newBookPurchaseLink = books[randomNum].volumeInfo.infoLink;
    document.querySelector('#cta-buy').setAttribute('href',newBookPurchaseLink);

    //show the results div
    document.querySelector('#book-result').classList.replace('book-result-off','book-result-on');

}

// CHOOSE RANDOM

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
        let genre = this.value;
        
        let APICall;

        //change API call depending on the category they choose
    
        if (genre == 0){
            //give fiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 1){
            //give nonfiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 2){
            //give mystery
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 3){
            //give history
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:history&langRestrict=en&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (genre == 4) {
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
});