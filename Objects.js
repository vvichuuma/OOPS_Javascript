

//Objects: 
const book_1 = {
    title: "book - 1",
    author: "John Doe",
    year: 2013,

    getSummary: function () {
        return `${this.title} was written by ${this.author} in the year - ${this.year}`;
    }
}


//To get the values in an object : 

console.log(Object.values(book_1));
