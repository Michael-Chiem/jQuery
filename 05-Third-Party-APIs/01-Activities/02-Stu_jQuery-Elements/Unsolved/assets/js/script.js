// Select the existing DOM element <div id="root"> and assign to a new variable
var rootElement = $("#root");

// Create a <p> element that will store an author's name and assign it to a new variable
var authorElement = $("<p>");

// Add the class "plain" to the author element
authorElement.addClass("plain");

// Add the following text to the author element: "~ Carol Dweck"
authorElement.text("~ Carol Dweck");

// Create a new <h1> element that will store an author's quote and assign it to a new variable
var quoteElement = $("<h1>");

// Apply the class "fancy" to the quote element
quoteElement.addClass("fancy");

// Add the following quote text to the quote element: "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteElement.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.");

// Append the author element to the quote element
quoteElement.append(authorElement);

// Append the quote element to the HTML element with an ID of "root"
rootElement.append(quoteElement);
