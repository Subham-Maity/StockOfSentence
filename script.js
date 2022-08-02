document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var myData = {
    //replicate the data make another 
    "Random": "In the aftermath of my tooth extraction, I have returned home  ~ Hinglish meaning of this line  : mere daant nikaalane ke baad, main ghar laut aaya hoon ",
    "Movie - wanda": " Hello World!\nThis is my string",
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
