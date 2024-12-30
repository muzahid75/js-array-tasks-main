let books = [
    "HTML and CSS",
    "JavaScript: The Good Parts",
    "Eloquent JavaScript",
    "Python Crash Course",
    "Clean Code"
];

let hasJavaScriptBook = books.some((book)=>
{
    return book.toLowerCase().includes("javascript");
});

if (hasJavaScriptBook) {
    console.log("The array contains a JavaScript book.");
} else {
    console.log("The array does not contain a JavaScript book.");
}
