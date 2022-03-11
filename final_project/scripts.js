


// event listener to display a random title when the user clicks "gimme"
document.addEventListener('DOMContentLoaded', function(event) {

    //return a random book genre when they click "surprise me"
    document.querySelector("#cta-surprise").addEventListener('click',function(e){
        e.preventDefault;

        let randomNum = Math.floor(Math.random() * 5);

        let APICall;

        if (randomNum == 0){
            //give fiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&printType=BOOKS&showPreorders=false&orderBy=newest&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (randomNum == 1){
            //give nonfiction
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&langRestrict=en&printType=BOOKS&showPreorders=false&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (randomNum == 2){
            //give mystery
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&langRestrict=en&printType=BOOKS&showPreorders=false&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else if (randomNum == 3){
            //give history
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:history&langRestrict=en&printType=BOOKS&showPreorders=false&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }else {
            //give biography
            APICall = "https://www.googleapis.com/books/v1/volumes?q=subject:biography&langRestrict=en&printType=BOOKS&showPreorders=false&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M";
        }
        fetch(APICall)
            .then(function(responseData){
            console.log(responseData);
            return responseData.json()
            })
            .then(function(jsonData){
                //now we have the data in json format!
                //use it!
                let books = jsonData.items;
                randomNum = Math.floor(Math.random() * books.length);
                let newBookTitle = books[randomNum].volumeInfo.title;
                let newBookAuthor = books[randomNum].volumeInfo.authors[0];
                let newBookDescription = books[randomNum].volumeInfo.description;
                let newBookImage = books[randomNum].volumeInfo.imageLinks.large;
                if (newBookImage == null){
                    newBookImage = books[randomNum].volumeInfo.imageLinks.thumbnail;
                }  
                let newBookPurchaseLink = books[randomNum].volumeInfo.infoLink;
                // console.log(jsonData)
                document.querySelector('#book-title').innerText = newBookTitle;
                document.querySelector('#book-author').innerText = newBookAuthor;
                document.querySelector('#book-desc').innerText = newBookDescription;
                document.querySelector('#book-image').setAttribute('src',newBookImage);
                document.querySelector('#cta-buy').setAttribute('href',newBookPurchaseLink);

            })
            .catch(function(error){
            //catch errors
            console.log("oh no theres been an error", error)


    })
        
    });



// const requestURL = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=en&maxResults=10&printType=BOOKS&showPreorders=false&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M"



});
/*

*** API call to pick a book ***

    q="https://www.googleapis.com/books/v1/volumes?q=subject:biography&langRestrict=en&maxResults=10&printType=BOOKS&showPreorders=false&key=AIzaSyDRGSuwCh9r4TIcSNiviRJ-T4Fv3cUe47M"

    subject: corresponds to category drop down
    - fiction
    - nonfiction
    - "mystery"
    - "History"
    - "Biography"


*** Useful Google Books API Result Object Properties ***

    ** For the volume info, use "volumeInfo". Example:
        "volumeInfo": {
            "title": "No More Time-Outs",
            "subtitle": "A Novel",
            "authors": [
            "Thomas Slater"
            ],
            "publisher": "Simon and Schuster",
            "publishedDate": "2013-10-29",
            "description": "Making a dubious agreement with a corrupt drug CEO who dabbles in the human organ black market, Wisdom Jones attempts to fulfill his mother's dying wish to see her family restored to their faith and prosperity.",
            ...
        }

    ** For the "buy" button, could use the "infoLink" property. For example:
        >"infoLink": "https://play.google.com/store/books/details?id=Ed-bAQAAQBAJ&source=gbs_api",

    ** For the book image, the api returns an "imageLinks" property in the object with links. Note that some just have thumbnails, and some no image. For example:

        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=Ed-bAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70PbL7U8tgmJxR-DFr9TonAsDPy7NPxvVexzP1H2BqbUqwFUO049xmkM9l757FLAnh0uYoaR5WAtZ3jiT5qL5qgA_kouP09JVYsHreAnMW3EOCc9AVy76nklM65dqQuif9y4nZT&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=Ed-bAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70gv1BR0FZSeAk1_t0yjJJNuKFTF3zOHJj-T50eV9HLaxlILEuADpt_WU_KdXi12WIwEIF6JJTxdN3Pg7C8cIOaj-ymuxJy9guuxHAb89WsfWbnu1Z8X60NASM3KNG4fkhENKYn&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=Ed-bAQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE701rcm0jdDNDcTEKENHKmsSS2HIK43MEn5A-aHFEFfFNRCenFSjSe2Sxo-80_RrQD03oyHxaNlrcJMqaYW_hx_e6Mi7MCa928jQLOTCGjd24aOzBY8o3-rUa4AFDRywjou7fCxP&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=Ed-bAQAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71k3_EyznVhwxDQ3u5uKW4EH0BoHJ8LRBN-X46hv5y6UbiTwbi-q4DtNkBFxBPzeCwEatBNvf17eQXYpME9rTP1TvAYo_m4cDX8Q4530vYvGV-NFWEOfkFf8S0XXBFJIs04nMf8&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=Ed-bAQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72PDQ3EjsP4UkswFqLBiAFn3_E_-z2lG96yU8t_zYCxcbzM_aggq9OAhHg0aHxq4gQvrIpARxPjC1wq9-9aHNEXkVc2ByF4RjwIa21EfUdujtQt2XN0DinUXn-7zoj2ieudelmi&source=gbs_api"
        },
  
  */