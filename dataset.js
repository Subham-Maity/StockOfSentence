// Data Set for adding sentences
document.querySelector("#generate").addEventListener("click", () => {
  //event listener for generate button click event
  generate(); //call generate function
});
let generate;
generate = () => {
  //Function to generate sentences from the data set and display them on the page
  var myData = {
    //Data Set for adding sentences
    //replicate the data make another object and add it to the array

    // *************************************Start******************************************S

    "1-Random":
      "In the aftermath of my tooth extraction, I have returned home  ~ Hinglish meaning of this line  : mere daant nikaalane ke baad, main ghar laut aaya hoon ",
    "Flexibility of the word FUCK":
      "Sexual: Let's fuck.  Mischief: Let's fuck with them.  Aggression: Let's fuck them up.  Anger: Fuck you.    Regret: Fuck me!     Resignation: Oh, fuck it     Surprise: Holy fuck!    Puzzlement: What the fuck?     Greeting: How the fuck are you?      Fraud: I got fucked over.          Identification: Who the fuck are you?     Philosophical: Who gives a fuck?     Compliment: She's so fucking beautiful.    Confusion: Where the fuck are we?     Wonder: What the fuck is that?     Amazement: How the fuck did he do that?           Threat: Don't fuck with me!             Realization: I fucking knew it!",
    "1-Ig: The Knowledge Spreader":
      "Keep it down  ~ Hinglish meaning of this line  : Thoda kam shor Machao😔 ",
    "2-Ig: The Knowledge Spreader":
      "Latch/bolt the door  ~ Hinglish meaning of this line  : Kundi laga do 😊",
    "3-Ig: The Knowledge Spreader":
      "Make your bed  ~ Hinglish meaning of this line  : Bistar sahi karo😊 ",
    "4-Ig: The Knowledge Spreader":
      "This is no brainer  ~ Hinglish meaning of this line  : Isme Zyada Dimag Lagane ki Zaroorat Nahi hai😲 ",
    "5-Ig: The Knowledge Spreader":
      "I've had anough of you  ~ Hinglish meaning of this line  : Mai tumhe bohot jhel chuki hun 😲 ",
    "6-Ig: The Knowledge Spreader": "Asthma  ~ Pronounce  : Az-Ma 😲 ",
    "7-Ig: The Knowledge Spreader": "Breakfast  ~ Pronounce  : Break-fst😲 ",
    "8-Ig: The Knowledge Spreader": "Dessert  ~ Pronounce  : Di-Zuhrt 😲",
    "9-Ig: The Knowledge Spreader": "Jewellery  ~ Pronounce  : Jool-Ri 😲",
    "10-Ig: The Knowledge Spreader": "Tomorrow  ~ Pronounce  : To-Maw-ro 😲 ",
    "2-Random ": "Cynophile ~ A person who loves dogs , Dog lover 🐕",
    "3-Random ": "Musicophile ~ One who loves music 🎸",
    "4-Random ": "Autophile ~ A person who loves being alone. 😔",
    "5-Random ": "Dendrophile ~ A person who loves trees 🌴",
    "6-Random ": "Hodophile ~ One who loves to travel ✈️",
    "7-Random ": "Thalassophile ~ Someone who loves the sea 🌊",
    "8-Random ": "Selenophile ~ a person who loves the moon 🌚",
    "9-Random ": "Astrophile ~ One who loves stars or astronomy 🚀",
    "1-Ocean English Academy":
      "Thank you for showering me with a lot of love ~ Hinglish meaning of this line  : Mere upar itna sara payar barsane k liye bohot sukriya app sabhika😘💕",
    "2-Ocean English Academy":
      "This is what I did ~ Hinglish meaning of this line  : Jo maine kiya tha 🙂",
    "3-Ocean English Academy":
      "I just need to make sure ~ Hinglish meaning of this line  : mujhe bas yah sunishchit karane kee zaroorat hai 🙄",
    "4-Ocean English Academy":
      "I do mean it,In real life ~ Hinglish meaning of this line  : mera matalab hai, vaastavik jeevan mein 😒",
    "5-Ocean English Academy":
      "I don't want to bombard with you lots of motivation ~ Hinglish meaning of this line  : main aapake saath dher saaree preranaon kee bauchhaar nahin karana chaahata 😁",
    "6-Ocean English Academy":
      "This is what I did ~ Hinglish meaning of this line  : Jo maine kiya tha 🙂",
    "7-Ocean English Academy":
      "May/Could I speak to Subham ? / If you confirm - Is this subham I'm talking to? ~ Hinglish meaning of this line  : Keya mai subham se baad kar sakhta hun ? 🤙",
    "8-Ocean English Academy":
      "Yes this is he.Please tell me how could I be of help ?~ Hinglish meaning of this line  : haan yah vahee hai.krpaya mujhe batao ki main kaise madad kar sakata hoon? 🤔",
    "9-Ocean English Academy":
      "The reason I am calling is to........ ~ Hinglish meaning of this line  : Maine jis liye call kiya wo hai 🙂",
    "10-Ocean English Academy":
      "Just a quick call to update you that today's meeting has been called off ~ Hinglish meaning of this line  : aapako apadet karane ke lie bas ek tvarit kol ki aaj kee baithak ko band kar diya gaya hai🙂",
    "10-Random ": "skeptical ~ an attitude of doubt 🤔",
    "11-Random ":
      "I just took a year off.The love of fitness never fades ~ mainne abhee ek saal kee chhuttee lee hai.fitness ka pyaar kabhee kam nahin hota 💪",
    "12-Random ": "I'll confront him  ~ main usaka saamana karoonga 💪 ",
    "13-Random ":
      "Love is unconditional when you can bolster that person through ETERNITY!💖",
    "14-Random ": "very weird  ~ Bizarre 🦉 ",
    "15-Random ": "Iron ~ Pronounce : Ion 😸",
    "16-Random ":
      "Touch wood ! ~ Hinglish meaning of this word : khi nazar n lge 🌚 ",
    "17-Random ":
      "Many-Many happy returns of the day ! ~ Hinglish meaning of this line  : Bhagwan kre yeh din bar bar aaye ! 🙂",
    "18-Random ":
      "I screwed up ~  Hinglish meaning of this line  : It's my mistake.🙄",
    "20-Random ":
      "Blow your own trumpet ~ to talk about oneself or one's achievements especially in a way that shows that one is proud or too proud He had a very successful year and has every right to blow his own trumpet. 😎",
    "21-Random ":
      "blow your own horn ~  to talk about oneself or one's achievements especially in a way that shows pride or too much pride We've had a very successful year, and I think we have a right to blow our own horn a little.😎",
    "22-Random ":
      "blow the whistle ~ you report them to the authorities about illegal or immoral things that they may have done 😡",
    "23-Random ":
      "When the pigs fly ~  used to say that one thinks that something will never happen.😮‍💨",
    "24-Random ":
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela 💪",
    "25-Random ":
      "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? Mere paas, mere paas... Maa hai ~ English Meaning : A Mother is the most priced possession 💪",
    "26-Random ":
      "Don't put all your eggs in one basket ~ Meaning : In stock market, don't put all your money in one company's stocks as you may lose it, if that company gors bankrupt💪",
    "27-Random ":
      "The ball is in your court ~ Meaning : It's your decision now that matters 💪",
    "28-Random ":
      "I'll have what she's having ~ Meaning : You say it on a date if you couldn't select a dish. P.S : It impresses the girl too💪",
    "29-Random ":
      "Your future is created by what you do today, not tomorrow - APJ Abdul Kalam ~ Meaning : Never wait for things to happen, start today 💪",
    "30-Random ":
      "Through thick and thin ~ Meaning : Being loyal to someone no matter what the situation is💪",
    "31-Random ":
      "Kabhi Kabhi Kuch Jeetne Ke Liya Kuch Haar Na Padta Hai. Aur Haar Ke Jeetne Wale Ko Baazigar Kehte Hain ~ Meaning : Sometimes, you have to lose to actually win💪",
    "32-Random ":
      "Don't beat around the bush ~ Hinglish Meaning : Seedhe point pe aao na💪",
    "33-Random ":
      "Hum jahan khade ho jaate hain, line wahi se shuru hoti hain ~ Meaning : Wherever I stand, the line starts from there💪",
    "34-Random ":
      "Winners are not those who never fail but those who never quit - APJ Abdul Kalam ~ Meaning : Winner never quit and quitters never win💪",
    "35-Random ":
      "YOLO - You Only Live Once  ~ Hinglish Meaning : Apna har din aise jiyo jaise ki aakhri ho💪",
    "36-Random ":
      "Find people who will make you better - Michelle Obama ~ Meaning : Remove toxic people from your life💪",
    "37-Random ":
      "Success🥇 is not final, Failure😞 is not fatal, it is the courage to continue 🏃‍♂️ that counts - Winston S.Churchil ~ Meaning : Being consistent is most important no matter what you are doing",
    "38-Random ":
      "Tough time⌛ never last, tough people 💪do - Robert schuller",
    "39-Random ":
      "No one is perfect that's why pencils✏️ have erasers - Wolfgang Rieve ~ Meaning : Stop being perfectionist.",
    "40-Random ":
      "Accept your past⏲️ without regret😞, Handle your present with confidence😊, and face your future without fear😱 - APJ Abdul Kalam",
    "41-Random ":
      "Optimism is the faith that leads to achievement🥇. Nothing can be done without hope and confidence😊 - Helen Keller ~ Meaning : One should not loose hope, faith and confidence",
    "42-Random ":
      "There are no shortcut's to any place🌄 worth going - Beverly Sills ~ Meaning : If you will get something immediately you will not get real essence of getting that📔",
    "43-Random ":
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible - Francis of assisi",
    "44-Random ":
      "Any fool can know. The point is to understand📔 - Albert Einstein ~ Meaning ~ Knowing is not enough, understanding is important",
    "45-Random ":
      "You don't drown by falling in the water🌊; you drown by staying there - Edcole ~ Meaning : Leave that place where you not getting what you want",
    "46-Random ":
      "Many life's failures are people who did not resalise how close they were to success when they gave up😞 - Thomas A. Edison ~ Meaning : Never gave up success is just one step away",
    "47-Random ":
      "Never Let your memories be greater than your dreams 💭- Douglas Ivester",
    "48-Random ":
      "When every seems to be going against you, remember that the airplane✈️ takes off against the wind🌬️, not with it - Henery Ford ~ Meaning : Fight against your fear that's when you get to your destination",
    "49-Random ":
      "Don't find fault❌, find a remedy✔️; anybody can complain. - Henry Ford ~ Hinglish Meaning : Don't complain, find a solution",
    "50-Random ":
      "The journey of a thousand miles🛣️ begins with one1️⃣ step. - Lao Tzu ~ Meaning : Start with small steps, you will reach your destination",
    "51-Random ":
      "Criticism is easy; achievement🏆 is difficult. - Winston Churchill ~ Meaning : It's easy to criticize, but it's difficult to achieve",
    "52-Random ":
      "Whatever you are, be a good one💪. - Abraham Lincoln ~ Meaning : Be the best version of yourself",
    "53-Random ":
      "What a difference a day makes. - Ella Fitzgerald ~ Meaning : One day can change your life",
    "54-Random ":
      "The best way to predict the future🔮 is to create🛠️ it. - Abraham Lincoln ~ Meaning : Create your own future",
    "55-Random ":
      "The best revenge is massive success🙌. - Frank Sinatra ~ Meaning : Success is the best revenge",
    "56-Random ":
      "The only place where success comes before work👨‍💻 is in the dictionary📔. - Vidal Sassoon ~ Meaning : Success doesn't come easy",
    "57-Random ":
      "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson ~ Meaning : You are the creator of your own destiny",
    "58-Random ":
      "Life is what happens when you're busy⌚ making other plans. - John Lennon ~ Meaning : Life is unpredictable",
    "59-Random ":
      "Do not go where the path may lead❌, go instead where there is no path✔️ and leave a trail. - Ralph Waldo Emerson ~ Meaning : Don't follow the crowd, make your own path",
    "60-Random ":
      "The only way to do great work is to love😍 what you do👨‍💻. - Steve Jobs ~ Meaning : Do what you love",
    "61-Random":
      "If you want to improve, be content to be thought foolish and stupid. ― Epictetus ~ Meaning : To learn a new skill, you need to allow yourself to be a clumsy beginner",
    "62-Random":
      "Learn something about everything and everything about something. - Thomas Huxley ~ Meaning : Always explore lot of fields and know something about it and know everything about that something which you like.",
      "63-Random":
      "",
    "1-Harry Potter ":
      "Do not pity the dead⚰️, Pity the living, and, above all those who live without love💘 - Albus Dumbledore ~ Meaning : There are people who live but without love and that is more pitiable, which is why we must spread love at all occasions ",

    "2-Harry Potter ":
      "It is impossible to manufacture or imitate love💝 -  Horace Slughorn ~ Meaning : Love is something that happens on its own ",

    "3-Harry Potter ":
      "When in doubt🤷‍♂️, go to the library📖 — Ron Weasley  ~ Meaning : As in the library there is near-infinite knowledge available",

    "4-Harry Potter ":
      "We are only as strong💪 as we are united, as weak as we are divided➗ -  Albus Dumbledore ~ Meaning : We can fight it only by showing an equally strong bond of friendship and trust🤷",

    "5-Harry Potter ":
      "The wand🪄 chooses the wizard🧙 — Garrick Ollivander ~ Meaning : There is a level of compatibility between the wand and the magic-user that needs to be taken into account🤷",

    "1-inspirational ":
      "If you want to shine like a sun, first burn like a sun - Dr APJ Abdul Kalam ~ Hinglish Meaning :  agar sooraj kee tarah chamakana hai to pahale sooraj kee tarah jalo 💘 ",

    "2-inspirational ":
      "It is during our darkest moments that we must focus to see the light — Aristotle ~ Hinglish Meaning :  yah hamaare sabase andhere kshanon ke dauraan hai ki hamen prakaash ko dekhane ke lie dhyaan kendrit karana chaahie😍.",

    "3-inspirational ":
      "Try to be a rainbow in someone's cloud — Maya Angelou ~ Hinglish Meaning : kisee ke baadal mein indradhanush banane kee koshish karo😍 ",

    "4-inspirational ":
      "We are not our best intentions, We are what we do — Amy Dickinson ~ Hinglish Meaning :  ham apane sabase achchhe iraade nahin hain, ham vahee hain jo ham karate hain😊",

    "5-inspirational ":
      "Being vulnerable is a strength, not a weakness — Selena Gomez ~ Hinglish Meaning :  kamajor hona ek taakat hai, kamajoree nahin😊",

    "6-inspirational":
      "Education is the most powerful weapon which you can use to change the world - Nelson Mandela ~ Hinglish Meaning : pdai ek esi cheej hai jisse tum puri duniya ko badal sakte ho esa hathiyar hain😊",

    "7-inspirational":
      "We will fail when we fail to try - Rosa Parks ~ Hinglish Meaning :  Hum usi waqt haar jaate hain jb hum us cheej ko krna ki himmat hi nhi karte ✔️ ",

    "8-inspirational":
       "Champions keep playing until they get it right - Billie Jean King ~ Hinglish Meaning : Vijeta hamesha apne upar kaam krta rehta hai jbtk ki vo jeet nhi jata 💪",  

    "9-inspirational":
       "The journey of a thousand miles begins with one step - Lao Tzu ~ Hinglish Meaning : Ek bade safar ki shuruat ek ek kadam se hi hoti hai 💪",
       
    "10-inspirational":
      "Dream big and dare to fail - Norman Vaughan ~ Hinglish Meaning : Bada socho aur uska pane ka junoon rakho apne under ✔️", 
      
    "11-inspirational":
      "The power of imagination makes us infinite - John Muir ~ Hinglish Meaning : Hum jitna bada soch sakte socho taki hum utni hi mehnat krkr usko pa le 🙌", 
      
    "12-inspirational":
      "Make each day your masterpiece - John Wooden ~ Hinglish Meaning : Apna har din ek safalta wala din bnao kyunki hmari puri zindagi dino ko milakar hi bnti hai to usko khrab mat kro ✔️", 

    "13-inspirational":
      "The best dreams happen when you’re awake - Cherie Gilderbloom ~ Hinglish Meaning : Sabse ache sapne tabhi aate hain jb hum jagge hue hote hain kyunki usi waqt hum aasl apni zindagi m hain 🙌", 

    "14-inspirational":
      "Once you choose hope, anything’s possible - Christopher Reeve ~ Hinglish Meaning : Jb tum icha ko choose kr lete ho to tum kuch bhi paa sakte ho 😍", 

    "15-inspirational":
      "Every moment is a fresh beginning - T.S. Eliot ~ Hinglish Meaning : Tumhara har pal ek new opportunity lekr aata hain to usko waste mat kro pichla soch soch kr 🥇", 

    "1-Motivational":
      "We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein ~ Meaning : Listen, learn and improve. That how you solve your problem and generate new ones.😸",

    "2-Motivational":
      "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi  ~ Meaning : You have one life. Make it a good one.🏁",

    "3-Motivational":
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out. — Eleanor Roosevelt  ~ Meaning : Giving and helping others in need will enrich your own life.😸",

    "4-Motivational":
      "When you change your thoughts, remember to also change your world. — Norman Vincent Peale  ~ Meaning : You can not grow if you are surrounded with base minded people. Change your enviroment and grow infinitely.🙌",

    "5-Motivational":
      "It is better to fail in originality than to succeed in imitation. — Herman Melville  ~ Meaning : Stop overthinking and step out of your mind. Now is the right time to act and do!😸",
        
    "6-Motivational":
      "And here you are living, despite it all.🍃 - Rupi Kaur ~ Meaning: Despite everything you’ve been through or are going through, you are still here… so what are you doing? Be the best vision of you. Invest in you.",
    
    "7-Motivational":
      "How you love yourself is how you teach others to love you. 🎈 - Rupi Kaur ~ Meaning: We must love ourselves first and value ourselves. This will not only set a benchmark for us but also for others.",

    "63-Random":
      "There is love in friendship. Friendship is greater than life. The one who wins the heart of a friend, has won the world. – Lord Krisha to Sudama ~ Meaning : World can be in peace with Love. 🏳️🏳️",

    "64-Random":
      "Do your duty unto others. This is the call of time. Ponder over why you have taken birth. – Mahabharata ~ Meaning : We should treat people as we would like to be treated. 😊😊",

    "65-Random":
      "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.-Benedict Cumberbatch ~ Meaning : We should never underestimate people. 💪",

    "66-Random":
      "Strange, isn’t it? Each man’s life touches so many other lives. When he isn’t around he leaves an awful hole, doesn’t he? -It's a Wonderful Life ~ Meaning : No man is a failure who has friends. 👨🏻‍🤝‍👨🏻",

    "67-Random":
      "There should be no boundaries to human endeavor. We are all different. However bad life may seem, there is always something you can do, and succeed at. While there’s life, there is hope. -Steven Hawking ~ Meaning : Every Human is special. 😁",

    "68-Random":
      "There is no God. No one directs the universe. - Steven Hawking ~ Meaning : No one directs our fate. 🔱",

    "69-Random":
      "Hope is a dangerous thing. Hope can drive a man insane. - The Shawshank Redemption ~ Meaning : Every passing moment makes you failure when you hope and it never happens whatever you have hoped. 🙏",

    "70-Random":
      "It's the possibility of having a dream come true that makes life interesting. - Paulo Coelho, The Alchemist ~ Meaning : Without possibility, life is meaningless. 😊😁",

    "71-Random":
      "Remember, love that doesn't include honesty doesn't deserve to be called love. -The Silent Patient ~ Meaning : There should be honesty within lovers or it isn't love. ❤👨‍❤️‍💋‍👨",

    "72-Random":
      "Whether a man is a legend or not is decided by history, not fortune tellers. - The Legend of Meluha ~ Meaning : A man is made legend by this karma and not by his Fate. 🔱☯☯",

    "73-Random":
      "We accept the love we think we deserve. ― Stephen Chbosky, The Perks of Being a Wallflower ~ Meaning : We think we love the one who love us as we deserve but we deserve more than we think. 😁",

    "74-Random":
      "People are screwed up in this world. I'd rather be with someone screwed up and open about it than somebody perfect and ready to explode. ― Ned Vizzini, It's Kind of a Funny Story ~ Meaning : I will be someone who is screwed up as they will be open about it unlike one who acts to be perfect as they will explode at some point. 💖👨‍❤️‍👨",

    "75-Random":
      "A wise man can learn more from his enemies than a fool from his friends.- Paulo Coelho, The Alchemist ~ Meaning : People who are foolish will never be able to benefit from the friends he or she has. 👬👫",

    "76-Random":
      "He who does not trust enough will not be trusted. - Lao Tzu ~ Meaning : If you do not trust other people, others will not be able to trust you. 🤝",

    "77-Random":
      "The best way to find out if you can trust somebody is to trust them. - Ernest Hemingway ~ Meaning : You can only come to know if a person is trustworthy or not by actually trusting them. 🙏",

    "78-Random":
      "Trust is like a vase, once it’s broken, though you can fix it, the vase will never be same again. - Walter Anderson ~ Meaning : Once trust is broken it cannot be restored as it was, no matter what.💔",

    "79-Random":
      "Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi ~ Meaning : Real strength comes from a person's strong will and mindset rather than a strong body. 🧠💪",

    "80-Random":
      "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau ~ Meaning : Success comes to those who work hard instead of sitting, waiting and complaining about their lives. 🏆",

    "81-Random":
      "If you don’t make time for exercise, you’ll probably have to make time for illness. - Robin Sharma ~ Meaning : If you do not keep your body active and healthy then you have to face the consequences of being unfit and ill. 🏃‍♀️🏃‍♂️",

    "82-Random":
      "Rome wasn’t built in a day, but they worked on it every single day. - Michael John Bobak ~ Meaning : Small consistent efforts everyday lead to great achievements. 🥇🏆",

    "83-Random":
      "Go the extra mile. It’s never crowded. - Wayne Dyer ~ Meaning : A lot of people are content with being good but very few people take the extra effort to be great at things. 🙌🏃‍♂️",

    "84-Random":
      "You just can’t beat the person who never gives up. - Babe Ruth ~ Meaning : A person who has a strong mindset cannot be outdone by a person with a mediocre mindset. 🔝",

    "85-Random":
      "Sometimes the women have to take over. Like in the war. - Polly Gray ~ Meaning : In times of trouble when men aren't around, women have to take charge and deal with the situation themselves. 👩💪",

    "6-inspirational":
      "When you have a dream, you've got to grab it and never let go. — Carol Burnett ~ Meaning : A dream shouldn't have to remain a dream, Put it to reality",

    "7-inspirational":
      "Nothing is impossible. The word itself says 'I'm possible! — Audrey Hepburn ~ Meaning : You can achieve anything that you can thought of",

    "8-inspirational":
      "There is nothing impossible to they who will try — Alexander the Great ~ Meaning : Keep trying until you get success",

    "9-inspirational":
      "The bad news is time flies. The good news is you're the pilot. — Michael Altshuler ~ Meaning : Always check the good side of the situation",

    "10-inspirational":
      "Life has got all those twists and turns. You've got to hold on tight and off you go. — Nicole Kidman ~ Meaning : Well, life is a pretty twisted thing. So, to survive in life, you must know how to live appropriately",

    "11-inspirational":
      "Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman ~ Meaning : Always focus Ahead!",

    "12-inspirational":
      "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell. — Amal Clooney ~ Meaning : Take challenges as an opportunity",

    "13-inspirational":
      "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box. — Duchess Meghan ~ Meaning : What are you at present is based on your previous decisions",

    "14-inspirational":
      "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill ~ Meaning : Keep hustling no matter whether you get success or failure",

    "15-inspirational":
      "you define your own life. Don't let other people write your script. — Oprah Winfrey ~ Meaning : You are writer of your own story",

    "16-inspirational":
      "Hey CodeXam You are Cool. — Xam ~ Meaning : You know He is cool",

    "86-Random ":
      "Main Apni Favourite Hoon  ~ English translation: I am my favourite person💪",

    "87-Random ":
      "Senorita, Bade Bade Sheheron Mein Aisi Chhoti Chhoti Baatein Hoti Rehti Hain ~ English translation:  Senorita, such small things are common place in such big cities 😊 ",

    "88-Random ":
      "Ek Baar Jo Maine Commitment Kar Di, Uske Baad Toh Main Khud Ki Bhi Nahi Sunta ~ English translation:  Once I make a commitment, I don’t listen to myself either😊  ",

    "89-Random ":
      "Bachcha Kabil Bano, Kabil … Kamyabi Toh Saali Jhak Maarke Peeche Bhagegi ~ English translation:  Child, become capable… success will then automatically follow 😊 ",

    "100-Random ":
      "Kehte Hain, Agar Kissi Cheez Ko Dil Se Chaho, Toh Puri Ki Puri Qayanaat Tumhe Usse Milaane Ki Koshish Mein Lag Jaati Hai ~ English translation:  It is said that if you truly want something, then the world conspires to get you to it 😊 ",

    "101-Random ":
      "Tension Lene Ka Nahi Sirf Dene Ka ~ English translation: Don’t take tension yourself, only give it.🏆  ",

    "102-Random ":
      "Risk Toh Spider Man Ko Bhi Lena Padta Hai, Main Toh Sirf Ek Salesman Hoon ~ English translation:  Even Spiderman needs to take risk, I am just a salesman🏆  ",

    "103-Random ":
      "Pehle Apni Game Baaki Logon Se Unchi Karo. Phir Apni Aawaz Unchi Karna ~ English translation: Raise your game before you raise your voice 🏆 ",

    "104-Random ":
      "Mere Hisaab Se Toh Dharam Ek Hi Kaam Karta Hai, Ya Toh Woh Insaan Ko Bebas Banata Hai Ya Antakwadi  ~ English translation: In my opinion religion achieves only one thing, either it makes a person helpless or a terrorist 🏃‍♂️ ",

    "105-Random ":
      "Agar Hum Apni Zindagi Ka Steering Wheel Apne Haath Mein Nahi Lenge Na… Toh Koi Doosra Driver Seat Par Baith Jayega ~ English translation: If we don’t control the steering wheel of our life, someone else will take control 😊 ",

    "106-Random ":
      "Dil Se Faisla Karo Tumhe Kya Karna Hai. Dimaag Tarkeeb Nikalega  ~ English translation: Decide from your heart what you want to do. The brain will find a way out 😊 ",

    "107-Random ":
      "Sahi Direction Mein Utha Har Kadam … Apne Aap Mein Ek Manzil Hai … After All Life Is All About The Next Step ~ English translation: Every step in the right direction is a milestone in itself… after all life is all about the next step😊  ",

    "108-Random ":
      "Tumhare Paas Joh Hai Tumhare Hisaab Se Kam Hai … Lekin Kisi Doosre Ke Nazar Se Dekho … Toh Tumhare Paas Bahut Kuch Hai ~ English translation: You might think you have very little. But, if you look at it from someone else’s view point, then you have a lot.😊  ",

    "17-inspirational":
      "If you only do what you can do, you will never be more than you are now. — Shifu, Kung Fu Panda ~ Meaning : The only way to achieve mastery is to push youself beyond your boundaries",

    "18-inspirational":
      "To make something special, you just have to believe it is special. — Mr. Ping, Kung Fu Panda ~ Meaning : Self-Belief is necessary for success",

    "19-inspirational":
      "Yesterday is history, tommorow is a mystery. Today is a gift. That is why it is called the present — Master Oogway, Kung Fu Panda ~ Meaning : One should only focus on the present, focusing on the future or past is pointless",

    "20-inspirational ":
      "Your real strength comes from being the best 'you' you can be. - Po, Kung Fu Panda ~ Meaning: You can't change who you are and you can only achieve success when you try to be the best version of yourself",

    "109-Random ":
      "It's the job that's never started that takes the longest time to finish - Samwise Gamgee, Lord of the Rings ~ Meaning: The only way to get something done is to start doing it.",

    "20-inspirational ":
      "Deeds will not be less valiant because they are unpraised - Aragorn, Lord of the Rings ~ Meaning: one should not do things just to be praised, one should do it because it is the right thing to do",

    "21-inspirational ":
      "Even the smallest person can change the course of history - Galadriel, Lord of the Rings ~ Meaning: Always believe in yourself, nothing else matters.",

    "110-Random ":
      "All we have to decide is what to do with the time that is given us. - Gandalf, Lord of the Rings ~ Meaning: Time is precious and you can't waste it thinking about the past",

    "22-inspirational ":
      "You have nothing if not belief - CS Lewis, Chronicles of Narnia ~ Meaning: Belief and Hope are the most important things.",

    "111- Random ":
      "Courage, dear heart - CS Lewis, Chronicles of Narnia ~ Meaning: Courage is necessary to survive. ",

    "112- Star Wars ":
      "It's over, Anakin. I have the high ground. - Obi-Wan-Kenobi, Star Wars - Revenge Of The Sith  ~ Meaning: Obi-Wan got better position in fight, and he will win.🤺🏆 ",

    "113- Star Wars ":
      "There’s always a bigger fish. - Qui-Gon Jinn, Star Wars - The Phantom Menace ~ Meaning: There is always someone stronger, who can beat us. 💪",

    "114- Star Wars ":
      " The ability to speak does not make you intelligent. - Qui-Gon Jinn, Star Wars - The Phantom Menace ~ Meaning: Even if you speak, it doenst mean that you can say something smart. 🗣️🧠",

    "115- Star Wars ":
      "As long as there’s light, we’ve got a chance. - Poe Dameron, Star Wars - The Phantom Menace ~ Meaning: If you are still alive you can win 🏆",

    "116- Star Wars ":
      "When I left you, I was but the learner. Now I am the master. - Darth Vader, Star Wars - A New Hope ~ Meaning: You can always overcome your master and become better🤺",

    "117- Star Wars ":
      "You know, no matter how much we fought, I’ve always hated watching you leave. – Leia Organa, The Force Awaken ~ Meaning: No matter how you argue with someone the love will stay forever❤️😡",

    "118- Star Wars ":
      "I’m just a simple man trying to make my way in the universe.” – Jango Fett, Star Wars - Attack of the clones ~ Meaning: Everyone is looking for their path in the world🚶‍♂️🌍",

    "119- Star Wars ":
      "No one’s ever really gone. – Luke Skywalker, The Last Jedi,  ~ Meaning: Even if someone is dead we will have them in our mind☠🤔",

    "120- Harry Potter ":
      "It is impossible to manufacture or imitate love. – Horace Slughorn, Harry Potter and the Half-Blood Prince ~ Meaning: We cannot act like true love❤️",

    "121-Harry Potter ":
      "We’re with you whatever happens. – Ron Weasley, Harry Potter and the Half-Blood Prince ~ Meaning: True friends will always stay with you in the best and in the worst 🙋‍♂️👥",

    "23-inspirational ":
      "I'm going to make him an offer 💥 he can't refuse 😮 - THE GODFATHER ~ Meaning: Negotiate as if this is your last chance",

    "24-inspirational":
      "You can't handle 🙌 the truth! 🤭 - A Few Good Men ~ Meaning: Truth is the bitter sweet ",

    "25-inspirational ":
      "Well, nobody's 👦 perfect. 🙂 - SOME LIKE IT HOT ~ Meaning: We live in a world of imperfections",

    "112- Random ":
      "You've got to ask yourself one question ❓❓❓: 'Do I feel lucky? 🤟' Well, do ya, punk? - DIRTY HARRY ~ Meaning: Be grateful for the thing we have ",

    "26-inspirational ":
      "A boy's 🤠 best friend is his mother 👨‍👧. - PSYCHO ~ Meaning: Mother is the most important person in our life",

    "113- Random ":
      "Greed, for lack ♉ of a better word ✨, is good. - WALL STREET ~ Meaning: Being Greedy is not a bad thing ",

    "114-Random ":
      "Gentlemen, you can't fight 👨‍🚒 in here! ⚔⚔⚔ This is the War Room! 🔪🔪🔪 - DR. STRANGELOVE ~ Meaning: Irony at its best",

    "115- Random ":
      "I have always depended on the kindness 🥂 of strangers 🚶‍♂️🚶‍♂️🚶‍♂️. - A STREETCAR NAMED DESIRE ~ Meaning: Sometimes a strange can be of some help in a bad situation ",

    "27-inspirational ":
      "Life 👽 is a banquet, and most poor suckers 🍲 are starving to death! 👣 - AUNTIE MAME ~ Meaning: Be courageous in life",

    "28- inspirational ":
      "My mother thanks you🙂. My father thanks you🙂. My sister thanks you🙂. And I thank you. - The Wizard of Oz, 1939 ~ Meaning: Be thankful to your family. They stuck by you through thick and thin. ",

    "123- Random ":
      "There's no place like home.🏡 - The Wizard of Oz, 1939 ~ Meaning: Home is the best place for comfort. 🛏",

    "124- Motivating ":
      "Today, I consider myself the luckiest man on the face of the earth.🙆‍♂️ - The Pride of the Yankees, 1942 ~ Meaning: You're the luckiest man on earth because you're alive. Be grateful for it ⚡️",

    "125- Motivating ":
      "May the Force be with you.🏆 - Star Wars, 1977 ~ Meaning: Wish everyone good fortune 😊  ",

    "126- Motivating ":
      "Fasten your seatbelts.💺 It's going to be a bumpy night. - All About Eve, 1950 ~ Meaning:  Be ready for the struggles & hurdles because life's not fair. Life is about facing the unfairness.👀 ",

    "127- Love ":
      "Love means never having to say you're sorry.❤️ -  Love Story, 1970 ~ Meaning:  From a standpoing: Love is about understanding, friendship & connection between each other ",

    "128- Inspirational ":
      "You complete me.✨ -  ERRY MAGUIRE, 1996 ~ Meaning: It's all about connection, both parners in love complete each other👫. For eg:- There is no solo existence of krishna without radha ",

    "129- Inspirational ":
      "I'll be back.🤩 -  The Terminator, 1984 ~ Meaning: You must get up🔥 after every fall, never give up ♥️ ",

    "130- Factual ":
      "You can't handle the truth! -  A Few Good Men, 1992 ~ Meaning: Not every people can handle, accept the truth. Be the honest one ! ",

    "131- Motivating ":
      "You is kind 😊. You is smart 😊. You is important.⚡️ -  The Help, 2011 ~ Meaning: Prioritize yourself first, don't think yourself as weak ! ",

    "132- Motivating ":
      "To infinity and beyond! 🔥 -  Toy Story, 1995 ~ Meaning: There are limitless possibilities💯, infinity is endless ! ",

    "133- Motivational ":
      "The Training Is Nothing. The Will ✊ Is Everything. The Will To Act - Batman Begins, 2005 ~ Meaning: Unless a person has the will and is determined enough to do a certain task,he cannot excel int it",

    "134- Inspirational ":
      "You Always Fear 😨 What You Don't Understand 😕. - Batman Begins, 2005 ~ Meaning: A person is always nervous about unfamiliar things and unless he/she experiments them, they seem unachievable",

    "135- Inspirational ":
      "Why do we fall 🍂, sir? So that we can learn to pick ourselves up. - Batman Begins, 2005 ~ Meaning: Obstacles are nothing but the stepping stones to success",

    "136- Insightful ":
      "You either die a hero 🦸 or live long enough to see yourself become the villain 🦹. - The Dark Knight, 2008 ~ Meaning:Taking that chance to die, means that you are indeed a hero because you stood for something and are willing to pay the price of death. ",

    "137- Motivational ":
      "It is not our abilities that show what we truly are… it is our choices 🔘. -Harry Potter and the Chamber of Secrets ~ Meaning: A person is best identified by the choices he/she made rather than the abilities possessed",

    "138- Motivational ":
      "Oh yes, the past can hurt. But you can either run 🏃‍♀️ from it, or learn 📘 from it.” -The Lion King ~ Meaning: Bad things happen, learn what you can and keep moving forward.",

    "139- Inspirational ":
      "“What we do 🧑‍💼 in life echoes in eternity.” - Gladiator ~ Meaning: It is our reputation that is the only thing left after death. ",

    "140- Motivational ":
      "Life is not the amount of breaths 😮‍💨 you take. It’s the moments that take your breath away 😲. - Hitch ~ Meaning: It’s not the number of years you live that counts in life, it’s how you live those years. We aren’t measured by how many memorable moments we have in our lives, but by how many new ones we create each day.Quality of life isn’t determined by how long you live, it’s determined by how well you live. ",

    "141- Motivational ":
      "Why are you trying so hard to fit in?, when you were born to stand out. - What A Girl Wants ~ Meaning: Everyone has different types of skill and talent, so never follow others dream and their career.",

    "142- Insightful ":
      "“But in times of crisis, the wise 🦉 build bridges, while the foolish 🤡 build barriers. - Black Panther ~ Meaning: It's during difficult times that the wise always look for solutions,whereas the foolish always construct hurdles.",

    "143- Insightful ":
      "Accident is the first building block of evolution 🧬. - Interstellar, 2014 ~ Meaning: Our errors and mistakes does not always make us a failure, It can also lead us to another desirable result",

    "144- Insightful ":
      "The very things that hold you down ⬇️ are going to lift you up ⬆️. - Dumbo, 1941 ~ Meaning: Love yourself enough to accept your own flaws. Those “flaws” are what make us beautifully different.",

    "145- Insightful ":
      "Sometimes it is the people 🧍 who no one imagines anything of who do the things that no one can imagine. - The Imitation Game, 2014 ~ Meaning: It is not good to judge other people's abilities. Sometimes the one whom you have underestimated can do things that you can't imagine.",

    "146- Insightful ":
      "An eye 👁️ for an eye 👁️ makes the whole world 🌐 blind. - Gandhi, 1982 ~ Meaning: A policy of revenge will lead to counterretaliations rather than peaceful resolutions",

    "147- Inspirational ":
      "Everything is possible, even the impossible. - Mary Poppins Returns, 2018 ~ Meaning: Your ideas can only come from you. Your ideas will change the world for someone. So run with those ideas, no matter how impossible they may seem. Run with those ideas even though people tell you that your idea is not possible.",

    "148- Motivational ":
      "Don't tell me 🤐 I can't do it; don't tell me 🤐 it can't be done!. - Aviator, 2004 ~ Meaning: Never consider things to be impossible",

    "149- Motivational ":
      "Just because someone stumbles and loses their path 🛣️, doesn't mean they're lost forever. - X-Men Days of Future Past, 2014 ~ Meaning: If someone commits mistakes that does not means that they cannot achieve success",

    "150- Motivational ":
      "We are who we choose to be. - Spider-Man, 2002 ~ Meaning: You have control over putting things and doing things in your life that you want to do.",

    "151- Insightful ":
      "Life is like a box of chocolates 🍫, you never know what you’re gonna get. - Forrest Gump, 1994 ~ Meaning: Life is unpredictable",

    "152- Insightful ":
      "Put two ships 🚢 in the open sea 🌊 without wind or ride, and they will come together. - Aquaman, 2014 ~ Meaning: It means how different we seem, we are all connected.",

    "153- Insightful ":
      "That’s one small step for man, one giant leap for mankind. - First Man, 2018 ~ Meaning: Progress is possible no matter how much small our step is.",

    "29- Inspirational ":
      "Do✔️or do not❌. There is no “try.” – Yoda, Star Wars: The Empire Strikes Back✨.~ Meaning: This quote is a reminder that to achieve our goals, we need to take action and not just talk about them",
    "30- inspirational ":
      "Great men are not born great; they grow great👯‍♂️. – Mario Puzo, The Godfather ~Meaning: This quote reminds that anyone can achieve greatness if they work hard enough. It is a message of hope and opportunity.",
    "31- inspirational ":
      "All we have to decide is what to do with the time given to us⌚. – Gandalf, Lord of the Rings: The Fellowship of the Ring ~ Meaning: This quote reminds us that we should make the most of every moment and not take life for granted. It is a message of mindfulness and appreciation.",
    "32- inspirational ":
      "All those moments will be lost in time⏰, like tears in the rain🌧️. – Rutger Hauer, Blade Runner ~Meaning: This quote reminds us that our time on this earth is precious and limited. It is a message of mortality and awareness.",
    "33- inspirational ":
      "You have to be a little bit crazy to do great things🌑. – The Dark Knight ~ Meaning: This quote reminds us that to achieve something great, we must be willing to take risks. It is a message of courage and ambition.",
    "34- inspirational ":
      "Get busy living, or get busy dying😥. – Andy Dufresne, The Shawshank Redemption ~ Meaning: This quote is a reminder that life is too short to waste time on things that don’t matter. It is a message of awareness and urgency",
    "35- inspirational ":
      "I keep telling everybody they should move on and grow. Some do. But not us😉. – Steve Rogers, Avengers: Endgame ~ Meaning: This quote is a reminder that some things are worth fighting for, even if they seem impossible. It is a message of hope and determination.",
    "36- inspirational ":
      "Put two ships in the open sea 🌊 without wind or ride, and they will come together💨. – Arthur, Aquaman ~ Meaning: This quote reminds us that no matter how different we seem, we are all connected. It is a message of unity and empathy.",
    "37- inspirational ":
      "There’s no such thing as an unsolvable problem 🔰🟢. – The Matrix ~ Meaning: This quote is a reminder that there is always a way to solve a problem, even if it seems impossible at first. It is a message of hope and resilience",
    "38- inspirational ":
      "What we do in life echoes in eternity ♾️. – Maximus, Gladiator ~ Meaning: This quote reminds us that our actions have consequences, both in this life and the next. It is a message of accountability and responsibility.",
    "39- The Intern ":
      "I know there is a hole 🕳 in my life and I need to fill it soon. – Ben Whittaker, The Intern ~ Meaning: Ben felt a void in his life. He did always had a purpose",
    "40- The Intern ":
      "You’re never wrong ❌to do the right thing ✅. – Ben Whittaker, The Intern ~ Meaning: He believed doing the right thing was never the wrong thing and it symbolized his life.",
    "41- The Intern ":
      "You should feel nothing but great ✨about what you have done, and I would hate to see you let anyone take that away from you. – Ben Whittaker, The Intern ~ Meaning: Ben inspired others to assert their own potential",
    "42- The Godfather ":
      "Keep Your Friends Close But Your Enemies Closer. – Michael, The Godfather ~ Meaning: One should be on ones toes and alert of  surroundings if malicious people are around, to ensure that they cannot wreak havoc in ones life.",
    "43- The Intern ":
      'Nobody calls men "men" anymore👨🏻. Have you noticed? Women went from "girls" to "women."Men went from "men" to "boys?" This is a problem in the big picture. – Jules, The Intern ~ Meaning: Jules expresses her dissatisfaction with how the current male society has become.',
    "44- The Intern ":
      "💻Mark Zuckerberg never brought in a CEO - and he was a teenager! – Jules, The Intern ~ Meaning: Jules makes an effort to develop her argument in support of Age is only a number.",
    "45- The Godfather ":
      "👨‍👩‍👧‍👦A man who doesn’t spend time with his family can never be a real man. – Don Vito Corleone, The Godfather ~ Meaning: It is your duty to be there for your family, regardless of the circumstances. This will help protect them while you are alive, and leave a meaningful legacy after you are gone.",
    "46- The Godfather ":
      "Leave the gun, take the cannolis. – Peter Clemenza, The Godfather ~ Meaning: Keep your priorities straight. 📈And do not forget to treat yourself, or your better half, after a job well done.",
    "47- The Godfather ":
      "Among reasonable men problems of business could always be solved. 🤝– Don Vito, The Godfather ~ Meaning: When you are trying to resolve a tricky problem, leave it alone, think about it some, and come back to it later. A solution will always present itself.",
    "48- The Godfather ":
      "Friendship and money. Oil and water🌊. – Michael Corleone, The Godfather ~ Meaning: Do not assume friends (or family for that matter) will behave rationally when money is at stake. Account for all your financial assets, perhaps even set up a Trust, and make sure it is all properly allocated in your Will so there is no confusion after you are gone.",
    "49- The Godfather ":
      "Good health is the most important thing. More than success, more than 💴 , more than power💪. – Hyman Roth, The Godfather ~ Meaning: Just because you should always be planning for the future does not mean you should not take care of yourself in the present. Be good to yourself: eat well, exercise, and try to live forever.",
    "50- inspirational":
      "You have to leave something behind 😑 to go forward😊. - Interstellar, 2014 ~ Meaning: Sometime in our live we have to make decision to sacrifice and quit something we love to move forward into better future.",
    "51- inspirational":
      "Whatever happens tomorrow😐, we've had today.😊 - One Day, 2011 ~ Meaning: We got to enjoy the present, the now where we are at, rather than worrying what might happen tomorrow and ruining the moment we have now.",
    "52- inspirational":
      "You'll have bad times😥, but it'll always wake you up to the good stuff you weren't paying attention to😊💫. - Good Will Hunting, 1997 ~ Meaning: Sometime, it will take some bad moments to make us realize how lucky and blessed we were with having them.",
    "53- inspirational":
      "Just because things ain't easy😥, that don't give you excuse🙄 to take what's not yours. - Cinderalla Man, 2005 ~ Meaning: We should not lose our beliefs, our values and our faith while the bad time comes. We can't make the excuse of bad times to be the bad person.",
    "54- inspirational":
      "Every champion was once a contender that refused to give up❤. - Rocky Movie, 1976 ~ Meaning: Perfection is not from birth but result of the sheer determination and  willingness to learn, to grow and become better without giving up.",
    "55- inspirational":
      "When I got tried, I slept. When I got hungry, I age. When I had to go, you know, I went.✔️🥰 - Forrest Gump, 1994 ~ Meaning: We got to do what is right for us in every situation.  You want something, then you got to do what it takes to get it. There is no other way.",
    "56- inspirational":
      "When you want something in life, you just gotta reach out and grap it😊💫. - Into the Wild, 2007 ~ Meaning: If we want something that's good, isn't it? Most people don't even know what they want in their life. So, we should move ahead and try to achieve that rather than making excuses even after setting the goals.",
    "57- inspirational":
      "Every man dies🙃, but not every man really lives🙄. - Braveheart, 1995 ~ We all have dreams, aspirations and goals. Some choose to give up thinking they are not good enough. Some fight for it, they feel and live for it.To fight is to live and to give up is to die.",
    "58- inspirational":
      "It's supposed to be hard. If it wasn't hard, everyone would do it😊. The hard... is what makes it great💫. - A League of Their Own, 1992 ~ Meaning: Our goals and aims of life should be difficult and challenging. That's what makes us live and fight for that. If they are easy then what the satisfaction on achieving them.",
    "59 - inspirational":
      "I know what I have to do now.🔥 I’ve got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?😊💫. - Cast Away, 2000 ~ Meaning: No matter how tough the situation is , we got to fight and struggle with the hope of that better days will come ahead. This gives us the strength to endure the suffering.",
    "60 - inspirational":
      "Don't let the past blackmail ❌ your present 🌟, to ruin a beautiful future 🔮 ~ Meaning: often our past experiences can affect our present activities, and what we do in our present can affect our future, so don't let one's Bad past Experiences have an impact on one's present! ",
    "70 - inspirational" :
      "Luck is what happens when preparation meets opportunity. 💯 - Seneca ~ Meaning: People many a time mistake success with luck, its the constant hard work along with opportunities offered that makes one successful!",
    "71 - inpirational" :
      "90% of life is confidence 🙌, and the thing about confidence is that no one knows if it’s real or not.🔥 - Euphoria, 2022 ~ Meaning: Things done with confidence can lead to success.",
    "72 - inspirational" :
      "Sometimes the right path 🛣 is not 🚫 the easiest one. Do not give up! 🎯 ~ Meaning: We assume that the path that we choose has to be smooth and easy going but the right path comes with a lots of ups and downs and comes with a lot of experience",
    "73 - inspirational" :
      "Some people can’t ✖ believe in themselves until someone else 👫 believes in them first.✨ – Sean Maguire, Good Will Hunting ~ Meaning: If you sometimes have trouble believing in yourself then read, absorb, enjoy.",
    
    "1- Money Heist ":
      "If you really want something in life, you have to steal🥷 it from somebody else. 🔥 -  Berlin, ~ Meaning: You have to steal the opportunity from others to achieve something great",
    "2- Money Heist ":
      "The plan is designed to survive any setbacks💯, including my death. ― The Professor, ~ Meaning: I have designed this plan To survive all outcomes, even my death",
    "3- Money Heist ":
      "You’re the sexiest woman 👩in the world but I love you for your brains🧠. ― The Professor, ~ Meaning: He loves her for her intelligence",
    "4- Money Heist ":
      "Time is greater than money💵.― The Professor, ~ Meaning: nothing is more costly than time",
    "5- Money Heist ":
      "You can’t get out of the Bank 🏦of Spain 🇪🇸alive. It’s impossible. But I will get you out of there. ― The Professor, ~ Meaning: he has already planned to get them all out of bank",
    "6- Money Heist ":
      "Maybe we’re all immature👶 to some extent. ― The Professor ~ Meaning: we all are little immature ",
    "7- Money Heist ":
      "First times are so special. But the last times are beyond comparison. Priceless💰. But people don’t usually know it. ― Berlin, ~ Meaning: People forget the last last time of their life",
    "8- Money Heist ":
      "What I don’t want is for you to die 🪦 before you’ve even lived. ― Berlin ~ Meaning: What I don’t want is for you to die before you’ve even lived.",
    "9- Money Heist ":
      "In heist love ♥️ can get multiplied ✖️. ― Tokio, ~ Meaning: People start loving more in a bad situation ",
    "10- Money Heist ":
      "My love, the things that actually matter in life always come unexpectedly⏰. ― Berlin, ~ Meaning: we don't know what will happen tomorrow",

    "1- Matsumoto Rangiku (BLEACH)":
      "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to the happiness you could have.🥹",

    "2- Naruto Uzumaki (NARUTO)":
      "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.🔥🔥🔥",

    "3- Saitama (ONE-PUNCH MAN)":
      "Simplicity is the easiest path to true beauty.😊",

    "4- Nagato (NARUTO)":
      "If you don’t share someone’s pain😢, you can never understand them😖",

    "5- Renton Thurston (EUREKA SEVEN)":
      "Don’t beg for things. Do it yourself😌, or else you won’t get anything.🫤",

    "6- Goku (DRAGON BALL Z)":
      "Power comes in response to a need😤, not a desire. You have to create that need.😤",

    "7- Monkey D. Luffy (ONE PIECE)":
      "Being lonely is more painful than getting hurt.😢😭",

    "8- Mugen (SAMURAI CHAMPLOO)":
      "Don’t live your life making up excuses.🙁 The one making your choices is yourself!💪",

    "9- Kurotsuchi Mayuri (BLEACH)":
      "I hate perfection.😡 To be perfect is to be unable to improve any further.🔥",

    "10- Monkey D. Luffy (ONE PIECE)":
      "If you don’t take risks, you can’t create a future!🔥",

    "11- Reiko Mikami (ANOTHER)":
      "It’s just pathetic to give up on something😥 before you even give it a shot.💪",

    "12- Alucard (HELLSING)":
      "Giving up kills people.😥 When people reject giving up…😔 they finally win the right to transcend humanity.💪🔥",

    "13- Milly Thompson (TRIGUN)":
      "Every journey begins with a single step.🙂 We just have to have patience.🙂",

    "14- Sanae Furukawa (CLANNAD)":
      "If your life can change once,🙂 your life can change again.🔥🔥🔥",

    "15- Gildarts Clive (FAIRY TALE)":
      "Fear is not evil.🙂 It tells you what your weakness is.🙂 And once you know your weakness, you can become stronger as well as kinder.💪🔥",

    "16- Izuku Midoriya (MY HERO ACADEMIA)":
      "Sometimes I do feel like I’m a failure.😥 Like there’s no hope for me.🥺 But even so, I’m not gonna give up. Ever!💪🔥",

    "17- Tsunade (NARUTO)":
      "People become stronger because they have memories they can’t forget.💪🔥",

    "18- Mitsuyoshi Anzai (SLAM DUNK)":
      "When you give up,🥺 that’s when the game ends.😥🥺",

    "19- Monkey D. Luffy (ONE PIECE)":
      "Forgetting is like a wound.😥 The wound may heal, but it has already left a scar.🥺",

    "20- Juuzou Suzuya (TOKYO GHOUL)":
      "Why should I apologize for being a monster?🥺 Has anyone ever apologized for turning me into one?🥹",

    "1- Criminal Minds":
      "I find that I do some of my best work📚 under intense terror💣🔪. - Dr. Spencer Reid, ~ Meaning: When the environment adds pressure and creates terror, new ideas are created to get make the best out of worse situation.",

    "2- Criminal Minds":
      "One of the last things I said before he shot🔫 me was everything happens for a reason💫. Derek, if I lose faith🛐 in that then nothing in my life makes sense🙏🏼. - Penelope Grace Garcia, ~ Meaning: When we believe in something and that belief is challenged, that is the time when you need to hold on to the belief even more tightly.",

    "3- Criminal Minds":
      "I belong in this unit.😤 And all I'm asking you for is the chance to show that🙏🏼. - Emily Prentiss, ~ Meaning: We need a chance to show that we belong somewhere.",

    "4- Criminal Minds":
      "Nothing white people🙍🏻‍♂️do to blacks🙍🏿‍♂️ is just. -Christopher J. Scaver, Sr., ~ Meaning: What white people think fun is racism for black people.",

    "5- The Hobbit: The Battle Of The Five Armies":
      "If more of us valued food🥗🍛 and cheer🍻 and song🎶 above hoarded gold🪙, it would be a merrier world.🥳 But, sad😔 or merry🤩, I must leave it now. Farewell👋🏼. -Thorin II Oakenshield, ~ Meaning: Life cann't always be cheerful but it has greed in it too. ",

    "6- Criminal Minds":
      "There are things we don't want to happen but have to accept.🥺 Things we don't want to know but have to learn.📒 And people we can't live without but have to let go☠️. -Jennifer Jareau, ~ Meaning: There are certain things in life that is out of our control and its okay to move on from them.",

    "7- Criminal Minds":
      "I study📚 guys like you for a living, I know more about you than you know about yourself🤟🏼🙏🏼. -Derek Morgan, ~ Meaning: When you do something for a long time, you began an expert on it.",

    "8- Criminal Minds":
      "Beauty🤍 can cover a multitude of sins😈. But underneath, we all look exactly the same💀. -Frank Breitkopf, ~ Meaning: Though we show good behaviour formthe outside, we are all filled with greed and selfishness from the inside.",

    "9- Willow ":
      "Magic🪄 is the bloodstream of the universe🌏. Forget all you know, or think you know. All that you require is your intuition😇. - High Aldwin, ~ Meaning: The way your intuition works is nature's wonder and magic.",

    "10- Star Trek: The Next Generation":
      "There are many parts of my youth⛹️🏽‍♂️ that I’m not proud of. There were loose threads, untidy parts of me that I would like to remove.➰️ But when I pulled on one of those threads, it unraveled the tapestry of my life🖤. - Captain Jean-Luc Picard, ~ Meaning: we all did many things that we are not proud of in our youth. But they are a part of you and makes who you are today.",

    "124- Random":
      "No one can ever prepare you for what happens when you have a child👶🏻. When you see the baby in your arms🤱🏻👨🏻‍🍼 and you know that it's your job now. No one can prepare you for the love and the fear.",

    "125- Random":
      "She was the, and still is to me, the most beautiful thing in the world.🌍",

    "126- Random":
      "We’re all traveling✈️ through time together, every day of our lives. All we can do is do our best to relish the remarkable ride.🎢",

    "127- Random":
      "It was the toughest decision of my life. Saying “yes” to the future meant saying “goodbye” to my dad forever.👋🏻",

    "128- Random":
      "All the time traveling✈️ in the world can’t make someone love❤️ you.",

    "129- Random":
      "I just try to live everyday🗓 as if I’ve deliberately come back to this one, to enjoy it, as if it was the final full day of my extraordinary, ordinary life.📆",

    "130- Random": "Live life as if there were no second chances.🔑",

    "131- Random":
      "I love your eyes.👀 I love the rest of your face, too. I haven’t even looked further down and I’m sure it’s all fantastic.🧚🏻‍♀️",

    "132- Random":
      "I’d only give one piece of advice to anyone marrying.💍 We’re all quite similar in the end. We all get old and tell the same tales too many times. But try and marry someone kind.",

    "133- Random": "You had me at ‘hello.👋🏻",

    "134 - Random":
      "My mama 👩‍👦 always said, 'Life was like a box of chocolates.🍫 You never know what you're gonna get. ✨' -Forrest Gump, 1994",
    "135 - Random":
      "It’s normal to be screwed up, but it’s really screwed up to romanticize it.❌ — Dr. Gregory House, House 2004 ~ Meaning: If you have a sob story and you think it's okay to tell it in public to gain sympathy, stop it. Whatever you have gone through, there's a good chance that many others have too.",
    "136 - Random" : 
      "The future🔮 is the home 🏠 of our deepest fears and our wildest hopes 🤞. – Grey’s Anatomy 2005 ~ Meaning: We ourselves imagine how our future look like with a hope of achieving it.",
    "137 - Random":
      "You do what feels good to you.🥰 - Euphoria, 2022",
    "138 - Random":
      "One day its gonna look like it happend overnight! 🎈 - Steve Harvey ~ Meaning: It takes constant amount of hard work that leads to success. day by day, step by step one can lead its way to success!",
    "139 - Random":
      "It's a basic truth of the human condition that everybody lies. The only variable is about what. - Dr. House, 2004 ~ Meaning: Accept it, understand it, and use it to your advantage. When in a group, observe people. Observe what they say and how they react. People often end up lying while boasting about themselves.",

    "1- Cinema Paradiso":
      "Life isn't like in the movies🎬. Life... is much harder.",

    "2- Cinema Paradiso": "Progress📈 always comes late.",

    "3- Marriage Story": "He🤦‍♂️ didn't see👀 me as separate from himself.",

    "4- Marriage Story":
      "People don't accept a mother who drinks too much wine🍷 and yells at her child and calls him an asshole.",

    "5- Marriage Story": "You always have to have your own voice.🗣",

    "6- Marriage Story":
      "You and i both🙍‍♀️🙍‍♂️ know you chose this life. you wanted it until you didn't.❌",

    "7- Marriage Story": "A bit of earth🌎 that's yours.",

    "8- Single Man":
      "You know that only thing that has made the whole thing worthwhile✨ has been those few times that I was able to truly connect🕸 with another person.",

    "9- Single Man": "Just get through the goddamn day🌞.",

    "10- Single Man":
      "If one is not enjoying one's present💐, there isn't a great deal to suggest that the future🔮 should be any better.",

    "1-Inception":
      "Once An Idea Has Taken Hold Of The Brain, It’s Almost Impossible To Eradicate.😮 -Domm , ~Meaning:At one point, Cobb compares ideas to parasites: “What is the most resilient parasite? Bacteria? A virus?😱 An intestinal worm? An idea. Resilient...highly contagious. Once an idea has taken hold of the brain, it’s almost impossible to eradicate. An idea that is fully formed – fully understood – that sticks; right in there somewhere.”",

    "2-Inception":
      "Downward Is The Only Way Forward.😬 -Domm , ~Meaning:Following the string of dreams in Inception isn’t easy. And when the characters say things like, 😣“Downward is the only way forward,” it certainly doesn’t help anybody follow the plot.",

    "3-Inception":
      "They Say We Only Use A Fraction Of Our Brain’s True Potential.😨 -Domm, ~Meaning:According to Domm Cobb, “They say we only use a fraction of our brain’s true potential. Now, that’s when we’re awake. When we’re asleep, we can do almost anything.”",

    "4-Inception":
      "True Inspiration Is Impossible To Fake. 😦-Aurthor , Meaning:In order to demonstrate the process of planting an idea in someone’s mind, Arthur tells Saito not to think about elephants, then asks him what he’s thinking about and he replies, “Elephants.” Arthur explains, “Right, but it’s not your idea. The dreamer can always remember the genesis of the idea.”",

    "5-Inception":
      "Dreams feel real while we’re in them. It’s only when we wake up that we realize something was actually strange 😵‍💫.-Domm , ~Meaning:Cobb makes a fantastic point about the psychology of dreams. It’s probably the first thing that comes up in a lecture about that part of human psychology,",
    "6-GodFather":
      " I’m gonna make him an offer he can’t refuse.😎” —Don Vito Corleone, ~Meaning:😎 Vito Corleone showing positive attitude",

    "7-GodFather":
      "A man who doesn’t spend time with his family can never be a real man. 😮‍💨 ” —Don Vito Corleone,~Meaning: Don realising the value family and duty of a real man",

    "8-GodFather":
      "Women and children can be careless, but not men😤. —Don Vito Corleone ,~ Meaning: Don tells the responsibility fo a real alpha male",

    "9-GodFather":
      "Revenge is a dish best served cold💀 ☠️. —Don Vito Corleone , ~ Meaning: Don tells the what revenge means to him",

    "10-The Prestige":
      " Now you're looking for the secret. But you won't find it because of course, you're not really looking 😵‍💫. You don't really want to work it out. You want to be fooled.,-cutter, ~ Meanign: cutter explaining that u are not actually want to find the secret ",

    "1- Dead Poets Society":
      "Carpe diem. Seize the day, boys.✍🏾 Make your lives extraordinary ✍🏻. ~Meaning: Make the most of everyday.",

    "2- Field of Dreams":
      "If you build it, they will come⚾. ~Meaning: If you want something done, do it yourself.",

    "3- Jerry Maguire":
      "💸Show me the money💰. ~Meaning: Pay me what I am worth.",

    "4- Moonstruck":
      "Snap out of it! ⏰😴📢⬆. ~Meaning: Wake up, pay attention, get it together.",

    "5- Chinatown":
      "Forget it Jake,🚓 it's Chinatown🐉. ~Meaning: the police are corrupt here, we can't do anthing about it.",

    "6- Gladiator":
      "Are you not entertained.🏛⛓ ~Meaning: Isn't this what you are here to see?",

    "7- The Dark Knight": "Why so serious?🃏😜. ~Meaning: Relax, have fun.",

    "8- The Bicycle Theives":
      "Why should I kill myself worrying when I'll end up just as dead?💀 ~Meaning: Life is too short to worry.",

    "9- Knute Rockne All American":
      "Tell 'em to go out there with all they got and win just one for the Gipper🏈. ~Meaning: Win the game for the coach.",

    "10- National Lampoons Animial House":
      "Toga! Toga! 🍺 ~Meaning: A toga party is a Greco-Roman-themed costume party where attendees wear a toga (normally made from a bed sheet) with sandals. ",

    "PIXAR- INSPIRE_1":
      "A great artist🎨🎨 can come from anywhere.–Anton Ego, Ratatouille ~ Meaning: Whether in a 👨‍🍳world-renowned restaurant or a sewer system , greatness can be found anywhere and in all of us. Look inside to find the artist in you.",

    "PIXAR- INSPIRE_2":
      "Just keep swimming🐟🐟.–Dory, Finding Nemo. ~ Meaning: Don’t give up. Persistence pays off💪.",

    "PIXAR- INSPIRE_3":
      " Our fate lives 🏙️ within us. You only have to be brave 💪enough to see it.–Merida, Brave ~ Meaning:The past does not equal the future. We each determine our own destiny🏙️.",

    "PIXAR- INSPIRE_4":
      "I don’t want to survive. I wanna live.–👑Captain, WALL•E ~ Meaning:Live life to the fullest and seize each and every day💃.",

    "PIXAR- INSPIRE_5":
      "To infinity and beyond!⚡⚡–Buzz Lightyear, Toy Story ~ Meaning:Set your sights high and dream💤💤 big. There is no limit to what you can achieve, if you just believe!",

    "PIXAR- INSPIRE_6":
      "You and I are a team 👥👥. There is nothing more important than our friendship.–Mike Wazowski, Monsters👺👺, Inc. ~ Meaning:Life is easier with a friend by your side 🧑‍🤝‍🧑.",

    "PIXAR- INSPIRE_7":
      "Good food🧑‍🍳 is like music you can taste, color you can smell🫕🫕. There is excellence all around you. You need only be aware to stop and savor it.–🧑‍🍳Chef Gusteau, Ratatouille ~ Meaning:Notice your surroundings. You never know what you might find.",

    "PIXAR- INSPIRE_8":
      "Your only limit is your soul. What I say is true—anyone can cook🫕🫕 ... but only the fearless can be great.–Chef Gusteau, Ratatouille ~ Meaning:Don’t be afraid to fail📉📉, for it is through these moments that you will eventually succeed.",

    "PIXAR- INSPIRE_9":
      "I never look back, darling. It distracts📱📱 from the now. –The Incredibles ~ Meaning: Just be in present 🎁🎁, plan for future and embrace the past",

    "PIXAR- INSPIRE_10":
      "When life gets you down⬇️, do you wanna know what you’ve gotta do? Just keep swimming🏊‍♂️🏊‍♂️.–Finding Nemo ~ Meaning: whenever life throws some problem at you face it bravely💪💪!",

    "1-Doctor Who ":
      "Remember, hate is always foolish 😡...and love ❤️...is always wise 😊. -  12th Doctor ~ Meaning : The hate will blind you and won't let you see that you're acting in a way you don't really want to, but love will always make you do your best for those you love ",

    "2-Doctor Who ":
      "Human progress 🏃 isn't measuredby industry 🏭. It's measured by the value you place on a life 💗. -  12th Doctor ~ Meaning :  Science and technology turns useless if we don't treat each other as human beigns.",

    "3-Doctor Who ":
      "Nothing's sad until it's over 🚩 , and then everything is 😭. -  12th Doctor ~ Meaning : Goodbyes are always sad ",

    "4-Doctor Who":
      "We're all stories in the end 🚩. Just make it a good one, eh? 📘. -  11th Doctor ~ Meaning : Live life to the fullest ",

    "5-Doctor Who":
      "Sometimes, the only choices you have are bad ones 👈, but you still have to choose ☝️. -  12th Doctor ~ Meaning : Make a choice may be hard ",

    "6-Doctor Who":
      "Every story 📘 ever told really happened. Stories 📕 ...are where memories go when they're forgotten 💌. -  12th Doctor ~ Meaning : There is a person behind every story ",

    "7-Jurassic Park ":
      "Life finds a way 🌱. -  Ian Malcolm ~ Meaning : Nature will always find a way to survive even in most harshest conditions ",

    "8-Avengers: Infinity War":
      "The hardest choices 👈 require the strongest wills ✊. -  Thanos ~ Meaning : It's not always easy make a choice, but you must ",

    "9-Sherlock":
      "To a great mind, 🔷 nothing is little 🔹. -  Sherlock Holmes ~ Meaning : That which is not easily seen can be easily ignored",

    "10-Sherlock":
      "Oh, I may be on the side of the angels 👼, but don't think for one second that i am one of them 💀. -  Sherlock Holmes ~ Meaning : To catch a criminal, you have to think like one ",
    "1-Friends":
      "I'll be there for you 🤝🤝. -  Rachel Green ~ Meaning : A true friend will always be there for you ",
    "2-Friends":
      "We were on a break! 💔. -  Ross Geller ~ Meaning : A break is a break, no matter what you say ",
    "3-Friends":
      "Could I BE wearing any more clothes? 🤔. -  Chandler Bing ~ Meaning : You can never be overdressed ",
    "4-Friends":
      "Well, maybe I don’t need your money. Wait, wait, I said maybe! 🤑. -  Monica Geller ~ Meaning : Money can't buy everything ",
    "5-Friends":
      "Joey doesn’t share food! 🍕. -  Joey Tribbiani ~ Meaning : Food is sacred ",
    "6-Friends":
      "I’m not so good with the advice. Can I interest you in a sarcastic comment? 😒. -  Chandler Bing ~ Meaning : Sometimes you just need to be sarcastic ",
    "7-Friends":
      "I wish I could, but I don’t want to. 😒. - Phoebe Buffay ~ Meaning : Sometimes you just don't want to do something ",
    "8-Friends":
      "This is all a moo point. 🐮. -  Joey Tribbiani ~ Meaning : It's a pointless argument ",
    "9-Friends":
      "I’m not superstitious, but I am a little stitious. 🤔. -  Ross Geller ~ Meaning : You can be a little superstitious ",
    "10-Friends":
      "I don’t even have a ‘pla.’ 🤔. -  Phoebe buffay ~ Meaning : You don't have a plan ",
    "11-Friends":
      "Oh, come on, Will, just take off your shirt and tell us. 🤔. -  Phoebe Buffay ~ Meaning : You can't hide anything from your friends ",
    "1-Game of Thrones":
      "When you play the game of thrones, you win or you die💀. There is no middle ground. -  Cersei Lannister ~ Meaning : There is no middle ground in life ",
    "2-Game of Thrones":
      "A lion🦁 doesn’t concern himself with the opinions of sheep🐏. -  Tywin Lannister ~ Meaning : Don't care about what others think ",
    "3-Game of Thrones":
      "The things I do for love🥰. -  Jamie Lannister ~ Meaning : Love can make you do crazy things ",
    "4-Game of Thrones":
      "I am the dragon’s daughter🐲, and I swear to you that those who would harm you will die screaming. -  Daenerys Targaryen ~ Meaning : You can be strong ",
    "5-Game of Thrones":
      "Valar morghulis⚰️ - jaqen H'ghar ~ Meaning : All men must die",
    "6-Game of Thrones":
      "The night is dark and full of terrors😰. -  Melisandre ~ Meaning : The world is a scary place ",
    "7-Game of Thrones":
      "A Lannister always pays his debts💰 - Tywin Lannister ~ Meaning : You must always pay your debts ",
    "8-Game of Thrones":
      "Chaos is a ladder🪜 - Littlefinger ~ Meaning : Chaos can be a good thing ",
    "9-Game of Thrones":
      "What do we say to the God of death? Not today. - Beric Dondarrion ~ Meaning : You can fight death ",
    "10-Game of Thrones":
      "That’s what I do. I drink🍷 and I know things🤓 - Tyrion Lannister ~ Meaning : You can be wise even if you can not be strong",

      "1-Princess Diaries":
      "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.✊ ~ Meaning : Courageous people put their priorities over fear",
      "2-Princess Diaries":
      "The brave may not live forever, but the cautious do not live at all.⚔️  ~ Meaning : IF you are over cautious, you miss out on life",
      "3-Princess Diaries":
      "From now on you’ll be traveling the road between who you think you are and who you can be.✊  ~ Meaning : You can always be better",
      "4-Princess Diaries":
      "As always, this is as good as it’s going to get.🤝🤝 ~ Meaning : Always be happy with what you have",
      "5-Princess Diaries":
      "It’s not appropriate for royalty 👑 to jingle. ~ Meaning : You can't be too flashy",
      "6-Princess Diaries":
      "C’mon, you can do it.🤝🤝 Keep your eye on the ball. ~ Meaning : You can do anything if you put your mind to it",
      "7-Princess Diaries":
      "You will find that the word fear is not in my vocabulary!✊ ~ Meaning : You can be fearless",
      "8-Princess Diaries":
      "We never rush; we hasten.💰 ~ Meaning : You can be fast without being reckless",
      "9-Princess Diaries":
      "Almost, but anyone can see your desires. No one knows what’s in your heart.🥰 ~ Meaning : You can be close, but not too close",
      "10-Princess Diaries":
      "Nepotism belongs in the arts, not in plumbing.🤝🤝 ~ Meaning : You can't be too close to your family",

    "1-Bridge of Spies":
    "Well, the boss isn't always right. But, he's always the boss.😎-Rudolf Abel",

    "2-Bridge of Spies":
    "James Donovan : You're not worried?\nRudolf Abel: Would it help?😌",

    "1-After Earth":
    "Fear is not real.😎 The only place that fear can exist is in our thoughts of the future.It is a product of our imagination, causing us to fear things that do not at present and may not ever exist. That is near insanity. Do not misunderstand me danger is very real but fear is a choice.-Will Smith",
   
    "1-300":
   "Spartans, eat well🍻, for tonight we dine in Hadesea. ⚔️ — King Leonidas, 300 meaning-King Leonidas knows this will be their last mean before the final battle. he says this to encourage his soldires to accept death proudly",

   "2-300":
   "He who sweats💧 more in training bleeds less in war.🥷 — Spartan Creed ~ Meaning : The greater the preparation, the greater the ability to handle adversity",

   "3-300":
   "You should reach the limits of virtue before you cross the border of death. - Aristodemus",

  "4-300":
  "The Spartans👑 do not ask how many are the enemy but where are they🤺.– Plutarch ~ Meaning : One must be brave enough to face his fears",


    "1-Rush":
      "A wise man🤔 can learn more from his enemies than a fool from his friends😌. - Niki Lauda ~ Meaning: Every occasion os an opportunity if we view it positively.",

    "2-10 things I hate about you":
      "Don’t✖️ let anyone ever make you feel like you don’t deserve what you want✊. - Heath Ledger ~ Meaning: Not everyone knows your life story. Live your life as your wish. Don't seek others validation.",

    "3-Black Hawk Down":
      "It’s what you do right now that makes a difference. ✊ - Struecker ~ Meaning: Your future depends on your present. ",

    "4-Finding Forrester":
      "We walk away from our dreams afraid we may fail😰, or worse yet, afraid we may succeed. 🫠 - William Forrester ~ Meaning: We are always afraid to purse our dreams. ",

    "5-Planet of the Apes":
      "I can't help thinking somewhere in the universe🌎 there has to be something better than man. Has to be.🙏🏼 - Taylor, ~ Meaning: The man has accomplished great things and still is a greedy being, there has to be something that is better than mankind.",

    "6- Avengers: Endgame":
      "You could not✖️ live with your own failure. Where did that bring you? Back to me.😏 - Thanos, ~ Meaning: No person can live on with their failures, failures always lead to the same problem until it is fixed.",


    "7- Star Wars: The Last Jedi":
      "I'll always be with you. Just like your father👨‍👦. - Luke Skywalker, ~ Meaning: Destruction of evil can never done with a evil force of anger, the hate only shifts but never ends.",

    "8- The Avengers":
      "The Avengers.💪🏼 That's what we call ourselves; we're sort of like a team. 'Earth's Mightiest Heroes'😎 type thing. - Tony Stark, ~ Meaning: The Avengers are the group that fight against the evils on the universe.",

    "9- Avengers: Infinity War":
      "Don't forget, I'm half-human. So that fifty percent of me that's stupid😵‍💫, that's a hundred percent you.🙏🏼 - Peter Quill, ~ Humans tend to make mistakes more than other artificial things so the accuracy of the task is compromised by Humans.",

    "10- IronMan":
      "Let's face👀 it, this is not the worst thing you've caught me doing🤭. - Tony Stark, ~ Meaning: Each person has done something that is morally bad.",

    "11- Predestination":
      "The one thing that this job has taught me is that truth✔️ is stranger than fiction❕️. - The Bartender, ~ Meaning: Fiction is the Imagination of the most complex things into a simple version, but the truth of the simplest things is much complex.",

    "12- Back To The Future II":
      "Marty! What in the name of Sir Isaac H. Newton happened here😯?. - Dr. Emmett Brown, ~ Meaning: ",

    "13- Westworld":
      "The right information at the right time is deadlier than any weapon🔪💣. - Martin Collins, ~ Meaning: Information and communication during an attack is very important as it is the information that leads us to attack when enemy let their guard down.",

    "14- Stranger Things":
      "Nobody normal🙂 ever accomplished anything meaningful in this🌍. - Jonathan Byres, ~ Meaning: To accomplish something in this world wo should be above normal, extraordinary.",
    
    "1- How I met your mother":
    "The biggest mistake would be not to make that mistake, because then you’ll go your whole life not knowing if something was a mistake or not🤔. - Lily Aldrin, ~ Meaning: Life is about taking risks. You can’t always play it safe.",
    
    "2- How I met your mother":
    "Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride🎢. - Ted Mosby, ~ Meaning: Some things are temporary, but that doesn’t mean they are meaningless.",
    
    "3- How I met your mother":
    "You can’t cling to the past, because no matter how tightly you hold on, it’s already gone😔. - Ted Mosby, ~ Meaning: It's already happened and time will move on, even if you're still stuck in the past.",
    
    "4- How I met your mother":
    "Oprah wasn't built🏗 in a day. - Lily Aldrin, ~ Meaning: You cannot expect to do important things in a short period of time.",
    
    "5- How I met your mother":
    "Nothing good happens after 2 a.m. When 2 a.m. rolls around, just go home and go to sleep🛌. - Ted Mosby, ~ Meaning: Don't make any decisions after 2 A.M. because they are wrong decisions.",
    
    "6- Prison Break":
    "We are captives⛓ of our own identities, living in prisons of our own creation. - Theodore Bagwell, ~ Meaning: We constrain ourselves through how we identify ourselves.",
    
    "7- The 100":
    "Life Should Be About More Than Just Surviving. - Clarke Griffin, ~ Meaning: We have to make the most of the time we have in our lifetime",
    
    "8- The 100":
    "Victory stands on the back of sacrifice. - Lexa, ~ Meaning: You have to make sacrifices to win",
    
    "9- The Vampire diaries":
    "Smiling doesn't always mean you're happy. Sometimes it simply means that you are a strong person. - Elena Gilbert",
    
    "10- The Originals":
    "Being kind doesn’t make you weak. - Hayley Marshall, ~ Meaning: it takes courage, empathy and strength to be kind.",

    "1- Avengers: Endgame":
    "Part of the journey is the end 🔚. - Tony Stark, ~ Meaning: Every journey in our life has to come to an end.",

  "2- Avengers: Endgame":
    "No amount of money 💰 has ever bought a second of time ⌛. - Tony Stark, ~ Meaning: Time is more precious than money.",

  "3- Avengers: Endgame":
    "It's not about how much we lost. It's about how much we have left. - Tony Stark, ~ Meaning: We must not worry about what we have lost but we must work with whatever we have left.",
  
  "4- Thor: The Dark World":
    "I would rather be a good man than a great king 👑. - Thor, ~ Meaning: Being a good man is better than being a great king.",

  "5- Thor: Ragnarok":
    "I choose to run 🏃‍ towards my problems, and not away from them. Because that's what heroes do. - Thor, ~ Meaning: Always look for challenges in life.",

  "6- Captain America: The First Avenger":
    "All we can do is our best 💪, and sometimes the best that we can do is to start over. - Peggy Carter, ~ Meaning: Sometimes starting something from scratch can be the best thing to do.",

  "7- Doctor Strange":
    "Faith is my sword ⚔. Truth is my shield 🛡. Knowledge my armor. - Doctor Strange, ~ Meaning: Wisdom, faith and truth are the three powerful virtues in our life .",
  
  "8- Avengers: Age of Ultron":
    "You never know. You hope for the best and make do with what you get. - Nick Fury, ~ Meaning: Hope for the best but be happy with any result.",

  "9- Spiderman: Far From Home":
    "Uneasy lies the head that wears the crown 👑. - Nick Fury, ~ Meaning: Being a King is a very difficult task.",
  
  "10- Thor: Ragnarok":
    "Even when you had two eyes 👀,you'd see only half the picture 🖼. - Odin, ~ Meaning: Everyone needs to remember to keep an open mind.",

  "11- Avengers: Endgame":
    "The measure of a person, of a hero 🦸‍ is how well they succeed at being who they are. - Frigga, ~ Meaning: Everyone needs to be successful in their personal milestones.",

  "12- Spider-Man: Homecoming":
    "No man can win every battle , but no man should fall without a struggle . - Peter Parker, ~ Meaning: Keep fighting even when things get tough.",
     
  "1- Rocky Balboa":
    "It Ain’t How Hard You Hit 👊…It’s How Hard You Can Get Hit 🥊 and Keep Moving Forward.🏃‍♂️ It's About How Much You Can Take And Keep Moving Forward!👏. -Rocky Balboa, ~ Meaning: The strongest people are those that get back up and keep fighting",

  "2- The Karate Kid Part II":
    "Never put passion 🤩 before principle 💪. Even if win, you lose.😔 - Mr. Miyagi, ~ Meaning: In order for your principles to matter and to guide your life, you must take them seriously",

  "3- Three Kings":
    "The way it works is, you do the thing you’re scared 😱 shitless of, and you get the courage AFTER you do it, not before you do it 🔂. - Archie Gates, ~ Meaning: Courage cannot exist without first being afraid",

  "4- Pocahontas":
    "Sometimes the right path 🛣 is not the easiest one 😫 - Grandmother Willow, ~ Meaning: Sometimes it's hard to make the right choice",

  "5- Gladiator":
    "Nothing happens to anyone 🙍‍♀️ that he is not fitted by nature 🌱 to bear. - Maximus, ~ Meaning: There is nothing that you can't handle if you put your mind to it",

  "6- Incredibles 2":
    "You want to get out of the hole? 🕳 First you’re going to have to put down the shovel 🧹. - Rick Dicker, ~ Meaning: You have to stop causing your own problems",

  "7- Ratatouille":
    "If you focus on what you left behind 😵‍💫, you will never be able to see what lies ahead..🌟 - Gusteau, ~ Meaning: Stop thinking about the past. Instead think about the future.",

  "8- Ferris Bueller’s Day Off":
    "Life moves pretty fast. 💨 If you don’t stop and look around 🌹 once in a while, you could miss it 🥺 - Ferris Bueller, ~ Meaning: Enjoy life because it moves quickly",
    
  "9- Dead Poets Society":
    "Carpe diem. 🎆 Seize the day, boys. Make your lives extraordinary ❤️‍🔥 - John Keating, ~ Meaning: Make the most out of your life and live to the fullest.",

  "10- Finding Nemo":
    "Just keep swimming. 🏊‍♀️ Just keep swimming. 🐠 Just keep swimming, swimming, swimming. 🐟 What do we do? We swim, swim. 🌊 - Dory, ~ Meaning: When life gets hard, you have to keep moving foward",

  "11- Black Panther":
    "How many times do I have to teach you:👩‍🏫 just because something works doesn’t mean it can’t be improved. 🛠 - Shuri, ~ Meaning: There is always room for innovation.",

  "12- First Man":
    "When you get a different vantage point 🏔, it changes your perspective 😲 ... It allows us to see things that maybe we should have seen a long time ago. 🙌 - Neil Armstrong, ~ Meaning: It's amazing how different things can look when you really make an effort to understand the world from another person’s perspective",

  "13- The Notebook":
    "So it’s not gonna be easy. It’s gonna be really hard. We’re gonna have to work at this every day, but I want to do that because I want you. I want all of you, forever, you and me, every day.",

  "14- ETERNAL SUNSHINE OF THE SPOTLESS MIND":
    "I could die right now, Clem. I'm just... happy. I've never felt that before. I'm just exactly where I want to be.",

  "15- The Great Gatsby":
    "I wish I had done everything on earth with you.",

  "16- The Princess Bride":
    "Death cannot stop true love. All it can do is delay it for a while.",

  "17- When Harry Met Sally":
    "I came here tonight because when you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",

  "18- Blue is the warmest colour":
    "You were the only thing in my life that was real.",

  "19- Goodwill Hunting":
    "It doesn’t matter if the guy is perfect or the girl is perfect, as long as they are perfect for each other.",

  "20- Titanic":
    "Winning that ticket, Rose, was the best thing that ever happened to me… it brought me to you.",

  "21 -Titanic":
    "It’s been 84 years, and I can still smell the fresh paint. The china had never been used. The sheets had never been slept in. Titanic was called the Ship of Dreams, and it was. It really was.",

  "22- Titanic":
    "I mean, I got everything I need right here with me. I got air in my lungs, a few blank sheets of paper. I mean, I love waking up in the morning not knowing what’s gonna happen or, who I’m gonna meet, where I’m gonna wind up. Just the other night I was sleeping under a bridge and now here I am on the grandest ship in the world having champagne with you fine people.",

  "23- Titanic":
    "It was the ship of dreams to everyone else. To me, it was a slave ship, taking me back to America in chains. Outwardly, I was everything a well brought up girl should be. Inside, I was screaming.",

  "24- Titanic":
    "I figure life’s a gift and I don’t intend on wasting it. You don’t know what hand you’re gonna get dealt next. You learn to take life as it comes at you… to make each day count.",






    
  };


  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(myData); //authors is an array of all the keys in the dictionary myData
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)]; //Math.floor(Math.random() * authors.length) is used to get random number between 0 and authors.length
  // grab the value(quote) that belongs to that key
  var quote = myData[author]; // grab the value(quote) that belongs to that key
  document.querySelector("#author").textContent = author; // display the author in the html
  document.querySelector("#quote").textContent = quote; // display the quote in the html
};
// _______________________________________Stop______________________________________________________________
// _____________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________
