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
    "1-Ocean English Academy": "Thank you for showering me with a lot of love ~ Hinglish meaning of this line  : Mere upar itna sara payar barsane k liye bohot sukriya app sabhika😘💕",
    "2-Ocean English Academy": "This is what I did ~ Hinglish meaning of this line  : Jo maine kiya tha 🙂",
    "3-Ocean English Academy": "I just need to make sure ~ Hinglish meaning of this line  : mujhe bas yah sunishchit karane kee zaroorat hai 🙄",
    "4-Ocean English Academy": "I do mean it,In real life ~ Hinglish meaning of this line  : mera matalab hai, vaastavik jeevan mein 😒",
    "5-Ocean English Academy": "I don't want to bombard with you lots of motivation ~ Hinglish meaning of this line  : main aapake saath dher saaree preranaon kee bauchhaar nahin karana chaahata 😁",
    "6-Ocean English Academy": "This is what I did ~ Hinglish meaning of this line  : Jo maine kiya tha 🙂",
    "7-Ocean English Academy": "May/Could I speak to Subham ? / If you confirm - Is this subham I'm talking to? ~ Hinglish meaning of this line  : Keya mai subham se baad kar sakhta hun ? 🤙",
    "8-Ocean English Academy": "Yes this is he.Please tell me how could I be of help ?~ Hinglish meaning of this line  : haan yah vahee hai.krpaya mujhe batao ki main kaise madad kar sakata hoon? 🤔",
    "9-Ocean English Academy": "The reason I am calling is to........ ~ Hinglish meaning of this line  : Maine jis liye call kiya wo hai 🙂",
    "10-Ocean English Academy": "Just a quick call to update you that today's meeting has been called off ~ Hinglish meaning of this line  : aapako apadet karane ke lie bas ek tvarit kol ki aaj kee baithak ko band kar diya gaya hai🙂",
    "10-Random ": "skeptical ~ an attitude of doubt 🤔",
    "11-Random ": "I just took a year off.The love of fitness never fades ~ mainne abhee ek saal kee chhuttee lee hai.fitness ka pyaar kabhee kam nahin hota 💪",
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
