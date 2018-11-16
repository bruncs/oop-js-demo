const primitive = "This is a primitive string";
const object = new String("This is an object declared as string");

// console.log(typeof primitive, primitive);
// console.log(typeof object, object);

//// Window is the absolute parent object of the browser
// console.log(window);

// Object literal
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

console.log(book1.getSummary());
