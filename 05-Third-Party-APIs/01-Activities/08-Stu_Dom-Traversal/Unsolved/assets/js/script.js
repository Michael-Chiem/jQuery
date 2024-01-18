// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.


// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

$('#root ul > li').css('background-color', 'white');
$('#root ul:eq(2) li:eq(0)').text('O');

// $('#root ul > li'): This selects all direct child <li> elements that are descendants of any <ul> element within the element with the ID root.

// .css('background-color', 'white'): This sets the CSS property background-color of the selected <li> elements to white, changing their background color.

// $('#root ul:eq(2) li:eq(0)'): This selects the first <li> element that is a child of the third <ul> element within the element with the ID root.

// .text('O'): This sets the text content of the selected <li> element to 'O'.

// In summary, the code is modifying the appearance of certain list items within a structure with the ID root. It changes the background color of all direct child list items under any unordered list (<ul>),
// and then it sets the text content of the first list item under the third unordered list to 'O'.