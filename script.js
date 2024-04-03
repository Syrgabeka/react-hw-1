function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title}, написанная ${this.author}, опубликованная в ${this.year} году.`;
  };
}

let book1 = new Book("Война и мир", "Лев Толстой", 1869);
let book2 = new Book("Преступление и наказание", "Федор Достоевский", 1866);
let book3 = new Book("1984", "Джордж Оруэлл", 1949);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

//
function Student(name, grade) {
  this.name = name;
  this.grade = grade;

  this.study = function () {
    console.log(`${this.name} учится в ${this.grade} классе.`);
  };
}

let student1 = new Student("Иван", 5);
let student2 = new Student("Мария", 8);

student1.study();
student2.study();
