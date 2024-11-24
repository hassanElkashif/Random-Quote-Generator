var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Act as if what you do makes a difference. It does. - William James",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
];
var lastQuote = null;

function randomQuotes() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  if (randomQuote === lastQuote) {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }

  lastQuote = randomQuote;
  quote.innerHTML = randomQuote ;
}