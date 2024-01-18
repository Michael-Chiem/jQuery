// Represents the form element with the ID "shopping-form" obtained using jQuery's $ function.
var shoppingFormEl = $('#shopping-form');

// Represents the list element with the ID "shopping-list" obtained using jQuery's $ function.
var shoppingListEl = $('#shopping-list');

// shoppingInputEl: Represents the input element with the name "shopping-input" obtained using jQuery's $ function.
var shoppingInputEl = $('input[name="shopping-input"]');

// This function is designed to handle form submissions. It takes an event parameter (assumed to be an event object) 
// and prevents the default form submission behavior.
function handleFormSubmit(event) {
  event.preventDefault(); //Prevents the default form submission behavior, ensuring that the form is not submitted in the traditional way.

  // Retrieves the value entered in the input field named "shopping-input" and assigns it to the variable shoppingItem.
  var shoppingItem = shoppingInputEl.val();

  // Checks if the shoppingItem is falsy (empty or undefined). If it is, logs a message to the console and exits the function.
  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // Appends a new list item (<li>) to the shopping list (shoppingListEl) containing the value of shoppingItem.
  shoppingListEl.append('<li>' + shoppingItem + '</li>');

  // Clears the content of the form input field (shoppingInputEl) after successfully handling the form submission.
  shoppingInputEl.val('');
}

// Attaches a submit event listener to the form element (shoppingFormEl),
// invoking the handleFormSubmit function when the form is submitted.
shoppingFormEl.on('submit', handleFormSubmit);
