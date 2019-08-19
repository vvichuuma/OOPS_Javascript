

//Constructor: 

//ES5 Functions: 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author}`;
    }
}

//Prototype funcitons: 
//If you are adding in a function to an object it is better to have a prototye: 

Book.prototype = {

    getData: function () {
        return `${this.title} was written by ${this.author}`;
    },

    getCode: function () {
        return `Hey I am the author ${this.author}`;
    }


}



//INstantiate a Book: 

const book_1 = new Book("Book-1", "John Doe", "2013");
const book_2 = new Book("Book-2", "Jean Grey", "2016");


console.log(book_2.getCode());

