var quotes = [
  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
  "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
  "One of the best programming skills you can have is knowing when to walk away for awhile.",
  "What would you do if you knew you could not fail?",
  "But man is not made for defeat. A man can be destroyed but not defeated."
];

var randomNumber = Math.random() * quotes.length;

randomNumber = Math.round(randomNumber);

document.getElementById("inspirationQuote").innerHTML = quotes[randomNumber];

var places = [
	"Taiwan",
	"USA",
	"Canada",
	"Alaska",
	"Timbuktu",
	"California",
	"Iowa",
	"Nebraska",
	"Arizona",
	"Russia"
];

var foods = [
	"Fruit Juice",
	"Soy Protein",	
	"coconut",
	"Sugar",
	"Popcorn",
	"strawberries",
	"blueberries",
	"blackberries",
	"boysenberries",
	"marionberries"
];

var myHeaders = new Headers(); 

function arrToUl(root, arr) {
  var ul = document.createElement('ul');
  var li;
  
  root.appendChild(ul); // append the created ul to the root

  arr.forEach(function(item) {
    if (Array.isArray(item)) { // if it's an array
      arrToUl(li, item); // call arrToUl with the li as the root
      return;
    }
    
    li = document.createElement('li'); // create a new list item
    li.appendChild(document.createTextNode(item)); // append the text to the li
    ul.appendChild(li); // append the list item to the ul
  });
}

var div = document.getElementById('ulplaces');

arrToUl(div, places);

function arrToOl(root, arr) {
  var ol = document.createElement('ol');
  var li;

  root.appendChild(ol); // append the created ul to the root

  arr.forEach(function(item) {
    if (Array.isArray(item)) { // if it's an array
      arrToOl(li, item); // call arrToOl with the li as the root
      return;
    }
    
    li = document.createElement('li'); // create a new list item
    li.appendChild(document.createTextNode(item)); // append the text to the li
    ol.appendChild(li); // append the list item to the ul
    //myHeaders.append('Content-Type', 'Foods');
  });
}

var div = document.getElementById('olfoods');

arrToOl(div, foods);

