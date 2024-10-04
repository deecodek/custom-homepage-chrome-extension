const quotes = [
  "The best way to predict the future is to create it.",
  "You only live once, but if you do it right, once is enough.",
  "In the end, we only regret the chances we didn’t take.",
  "Life is what happens when you’re busy making other plans.",
  "The purpose of our lives is to be happy."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('quote').innerText = getRandomQuote();

document.getElementById('newQuoteBtn').addEventListener('click', () => {
  document.getElementById('quote').innerText = getRandomQuote();
});