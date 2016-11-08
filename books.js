var program = require('commander');
 
var book1_title = "Bridget Jones's Baby: the Diaries";
var book1_author = "Helen Fielding";
var book1_price = 16.95;
var book1_kind = "Hardback";

var book2_title = "The Girls";
var book2_author = "Emma Cline";
var book2_price = 17.95;
var book2_kind = "Paperback";

var book3_title = "The Best of Adam Sharp";
var book3_author = "Graeme Simsion";
var book3_price = 18.95;
var book3_kind = "Paperback";

var book4_title = "Bit Rot";
var book4_author = "Douglas Coupland";
var book4_price = 19.95;
var book4_kind = "Paperback";

var book5_title = "A Closed and Common Orbit: Wayfarers 2";
var book5_author = "Becky Chambers";
var book5_price = 19.99;
var book5_kind = "Paperback";

program
  .version('0.0.1')
  .option('-t, --title [value]', 'Search a book by title')
  .option('-a, --author [value]', 'Search a book by author')
  .option('-p, --price [value]', 'Search a book by price')
  .option('-k, --kind [value]', 'Search a book by kind')
  .parse(process.argv);

if(program.title){
	switch(program.title){
		case book1_title:
			console.log(book1_title);
			console.log(book1_author);
			console.log(book1_price);
			console.log(book1_kind);
			break;
		case book2_title:
			console.log(book2_title);
			console.log(book2_author);
			console.log(book2_price);
			console.log(book2_kind);
			break;
		case book3_title:
			console.log(book3_title);
			console.log(book3_author);
			console.log(book3_price);
			console.log(book3_kind);
			break;
		case book4_title:
			console.log(book4_title);
			console.log(book4_author);
			console.log(book4_price);
			console.log(book4_kind);
			break;
		case book5_title:
			console.log(book5_title);
			console.log(book5_author);
			console.log(book5_price);
			console.log(book5_kind);
			break;
		default:
			console.log('There is no book with that title.');
			break;
		}
	}
if(program.author){
	switch(program.author){
		case book1_author:
			console.log(book1_title);
			console.log(book1_author);
			console.log(book1_price);
			console.log(book1_kind);
			break;
		case book2_author:
			console.log(book2_title);
			console.log(book2_author);
			console.log(book2_price);
			console.log(book2_kind);
			break;
		case book3_author:
			console.log(book3_title);
			console.log(book3_author);
			console.log(book3_price);
			console.log(book3_kind);
			break;
		case book4_author:
			console.log(book4_title);
			console.log(book4_author);
			console.log(book4_price);
			console.log(book4_kind);
			break;
		case book5_author:
			console.log(book5_title);
			console.log(book5_author);
			console.log(book5_price);
			console.log(book5_kind);
			break;
		default:
			console.log('There is no book with that author.');
			break;
	}
}
if(program.price){
	switch(program.price){
		case book1_price:
			console.log(book1_title);
			console.log(book1_author);
			console.log(book1_price);
			console.log(book1_kind);
			break;
		case book2_price:
			console.log(book2_title);
			console.log(book2_author);
			console.log(book2_price);
			console.log(book2_kind);
			break;
		case book3_price:
			console.log(book3_title);
			console.log(book3_author);
			console.log(book3_price);
			console.log(book3_kind);
			break;
		case book4_price:
			console.log(book4_title);
			console.log(book4_author);
			console.log(book4_price);
			console.log(book4_kind);
			break;
		case book5_price:
			console.log(book5_title);
			console.log(book5_author);
			console.log(book5_price);
			console.log(book5_kind);
			break;
		default:
			console.log('There is no book with that price.');
			break;
		}
	}
if(program.kind){
	switch(program.kind){
		case book1_kind:
			console.log(book1_title);
			console.log(book1_author);
			console.log(book1_price);
			console.log(book1_kind);
			break;
		case book2_kind:
			console.log(book2_title);
			console.log(book2_author);
			console.log(book2_price);
			console.log(book2_kind);
			break;
		case book3_kind:
			console.log(book3_title);
			console.log(book3_author);
			console.log(book3_price);
			console.log(book3_kind);
			break;
		case book4_kind:
			console.log(book4_title);
			console.log(book4_author);
			console.log(book4_price);
			console.log(book4_kind);
			break;
		case book5_kind:
			console.log(book5_title);
			console.log(book5_author);
			console.log(book5_price);
			console.log(book5_kind);
			break;
		default:
			console.log('There is no book of that kind.');
			break;
	}
}