document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var myData = {
    //replicate the data make another 
    "Random": "In the aftermath of my tooth extraction, I have returned home  ~ Hinglish meaning of this line  : mere daant nikaalane ke baad, main ghar laut aaya hoon ",
    "Flexibility of the word FUCK 😂": "Sexual: Let's fuck.  Mischief: Let's fuck with them.  Aggression: Let's fuck them up.  Anger: Fuck you.    Regret: Fuck me!     Resignation: Oh, fuck it     Surprise: Holy fuck!    Puzzlement: What the fuck?     Greeting: How the fuck are you?      Fraud: I got fucked over.          Identification: Who the fuck are you?     Philosophical: Who gives a fuck?     Compliment: She's so fucking beautiful.    Confusion: Where the fuck are we?     Wonder: What the fuck is that?     Amazement: How the fuck did he do that?           Threat: Don't fuck with me!             Realization: I fucking knew it!",

  };

  

  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(myData);
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  var quote = myData[author]
  document.querySelector("#author").textContent = author;
  document.querySelector("#quote").textContent = quote;
  

}
