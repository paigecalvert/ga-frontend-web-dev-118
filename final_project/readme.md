# About the Tell Me What to Read App

This web application uses the Google Books APIs to display a book, including its title, author, cover image, and a description. It also provides a link to the Google Books web page for the book, where you can learn more and find retailers where you can buy the book.

## Google Books API Query

In order to return a book result, Tell Me What to Read sends a `GET` request to the Google Books APIs with the following parameters:
* **q**: The search query. Tell Me What to Read uses the genre that you select from the **Choose a Genre** dropdown as the search query. If you select **Surprise Me**, Tell Me What to Read choose a genre at random.
* **langRestrict=en**: Limits the results to publications in English.
* **printType=books**: Limits the results to books.
* **orderBy=relevance**: Orders the results returned by relevance to the search query.

For example:

```
https://www.googleapis.com/books/v1/volumes?q=mystery&langRestrict=en&printType=books&orderBy=relevance&key=MY-KEY
```

For more information, see [Volume: list](https://developers.google.com/books/docs/v1/reference/volumes/list) in the Google Books APIs documentation.

## Supported Browsers

Tell Me What to Read is supported on the following browsers:

* Latest stable versions of Google Chrome
* Latest stable versions of Mozilla Firefox
* Safari v10.1 and later

## Limitations

* **Limitations of the search query**: To get a larger range of books in the response from the Google Books APIs, the search query `q=` includes only the name of the user-selected or randomly-selected genre. It does not specify that the search term is a genre. For example, rather than `q=subject:mystery`, Tell Me What to Read uses `q=mystery`. This returns any relevant books that match the search term `q=mystery`, whether `mystery` is in the title or in the list of genres for the book.
* **Limited number of results in the API response**: The Google Books API returns a limited number of items in the results. Although a search query might include several book results in the response, the Google Books API limits the items in the response body to 10. This limits the number of possible books that can be displayed in the app. 
