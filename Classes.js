//Es6 Classes: 

//we are creating the same book file in terms of Es6 Class : 
class Book {

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author}`;
    }

}

const Book_1 = new Book('Book one', 'John Doe', "2013");

console.log(Book_1.getSummary());