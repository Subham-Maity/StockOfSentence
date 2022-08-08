document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var myData = {
    //replicate the data make another 
    "1-Random": "In the aftermath of my tooth extraction, I have returned home  ~ Hinglish meaning of this line  : mere daant nikaalane ke baad, main ghar laut aaya hoon ",
    "Flexibility of the word FUCK 😂": "Sexual: Let's fuck.  Mischief: Let's fuck with them.  Aggression: Let's fuck them up.  Anger: Fuck you.    Regret: Fuck me!     Resignation: Oh, fuck it     Surprise: Holy fuck!    Puzzlement: What the fuck?     Greeting: How the fuck are you?      Fraud: I got fucked over.          Identification: Who the fuck are you?     Philosophical: Who gives a fuck?     Compliment: She's so fucking beautiful.    Confusion: Where the fuck are we?     Wonder: What the fuck is that?     Amazement: How the fuck did he do that?           Threat: Don't fuck with me!             Realization: I fucking knew it!",
    "1-Ig: The Knowledge Spreader": "Keep it down  ~ Hinglish meaning of this line  : Thoda kam shor Machao ",
    "2-Ig: The Knowledge Spreader": "Latch/bolt the door  ~ Hinglish meaning of this line  : Kundi laga do ",
    "3-Ig: The Knowledge Spreader": "Make your bed  ~ Hinglish meaning of this line  : Bistar sahi karo ",
    "4-Ig: The Knowledge Spreader": "This is no brainer  ~ Hinglish meaning of this line  : Isme Zyada Dimag Lagane ki Zaroorat Nahi hai ",
    "5-Ig: The Knowledge Spreader": "I've had anough of you  ~ Hinglish meaning of this line  : Mai tumhe bohot jhel chuki hun ",
    "6-Ig: The Knowledge Spreader": "Asthma  ~ Pronounce  : Az-Ma ",
    "7-Ig: The Knowledge Spreader": "Breakfast  ~ Pronounce  : Break-fst ",
    "8-Ig: The Knowledge Spreader": "Dessert  ~ Pronounce  : Di-Zuhrt ",
    "9-Ig: The Knowledge Spreader": "Jewellery  ~ Pronounce  : Jool-Ri ",
    "10-Ig: The Knowledge Spreader": "Tomorrow  ~ Pronounce  : To-Maw-ro ",
    "2-Random ": "Cynophile ~ A person who loves dogs , Dog lover 🐕",
    "3-Random ": "Musicophile ~ One who loves music 🎸",
    "4-Random ": "Autophile ~ A person who loves being alone. 😔",
    "5-Random ": "Dendrophile ~ A person who loves trees 🌴",
    "6-Random ": "Hodophile ~ One who loves to travel ✈️",
    "7-Random ": "Thalassophile ~ Someone who loves the sea 🌊",
    "8-Random ": "Selenophile ~ a person who loves the moon 🌚",
    "9-Random ": "Astrophile ~ One who loves stars or astronomy 🚀",
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
