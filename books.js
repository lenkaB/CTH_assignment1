var program = require('commander');

function Book(title, author, price, kind) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.kind = kind;
}

var books = [
	new Book("Bridget Jones", "Helen Fielding", "16.95", "Hardback"),
	new Book("The Girls", "Emma Cline", "17.95", "Paperback"),
	new Book("The Best of Adam Sharp", "Graeme Simsion", "18.95", "Paperback"),
	new Book("Bit Rot", "Douglas Coupland", "19.95", "Paperback"),
	new Book("A Closed and Common Orbit: Wayfarers 2", "Becky Chambers", "19.99", "Paperback")
	];

program
  .version('0.0.1')
  .option('-t, --title [value]', 'Search a book by title')
  .option('-a, --author [value]', 'Search a book by author')
  .option('-p, --price [value]', 'Search a book by price')
  .option('-k, --kind [value]', 'Search a book by kind')
  .parse(process.argv);

  var i;
  
if(program.title){
    for(i=0;i<5;i++)
        if(program.title==books[i].title)
            console.log(books[i]);
}

if(program.author){
    for(i=0;i<5;i++)
        if(program.author==books[i].author)
            console.log(books[i]);
}

if(program.price){
    for(i=0;i<5;i++)
        if(program.price==books[i].price)
            console.log(books[i]);
}

if(program.kind){
    for(i=0;i<5;i++)
        if(program.kind==books[i].kind)
            console.log(books[i]);
}
