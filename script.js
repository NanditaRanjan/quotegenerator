// Array of quotes
var quotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ];
  
  // Get HTML elements
  var quoteElement = document.getElementById("quote");
  var nextButton = document.getElementById("nextButton");
  
  // Display a random quote
  function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  // Generate a random quote on page load
  displayRandomQuote();
  
  // Add event listener to the nextButton
  nextButton.addEventListener("click", displayRandomQuote);
  