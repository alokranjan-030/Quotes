 const quoteText = document.getElementById("quote");
 const personText = document.querySelector(".person");
 const quoteButton = document.getElementById("new-quote");

 let quotes = [
    {
        quote: "A rose by any other name would smell as sweet.",
        person: "William Shakespeare"
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.",
        person: "John Kennedy"
    },
    {
        quote: "Here's looking at you, kid.",
        person: "Rick"
    },
    {
        quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        person: "Martin Luther King"
    },
    {
        quote: "That’s one small step for a man, a giant leap for mankind.",
        person: "Neil Armstrong"
    },
    {
        quote: "Power corrupts; absolute power corrupts absolutely.",
        person: "John Dalbergation"
    },
    {
        quote: "United we stand, divided we fall.",
        person: "Aesop"
    },
]

 quoteButton.addEventListener("click", function () {
    let randomQuote = Math.floor(Math.random()*quotes.length);

    quoteText.textContent = quotes[randomQuote].quote;
    personText.textContent = quotes[randomQuote].person;
 })