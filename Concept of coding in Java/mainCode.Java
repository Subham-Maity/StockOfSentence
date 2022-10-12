import java.util.Random;
// basic random sentence generator in from  your own data set
public class CodeXam {

//==================================================================================================================================================================
    /*
       RULE 0:  ADD MOVIE NAME WITH LINE AND MEANING OF THE LINE

      RULE 1 : Replicate LAST Line from DATA SET - THEN CHANGE THE LINE NUMBER(STRING REFERENCE) TO MATCH THE DATA SET AND ADD YOUR DATA ON THIS STRING

      RULE 2 : Replicate LAST Line from OPERATE FUNCTION - THEN REPLACE THE NEXT NUMBER IN CASE FUNCTION AND CHANGE THE LINE NO(STRING REFERENCE)
     * */
//==================================================================================================================================================================

    // DATA ADD WITH COUNTING - DATA SET
    public static void main(String[] args) {

        int row_increase = 0;
        String line1 = "The quick brown fox jumps over the lazy dog";
        String meaning1 = "A sentence";
        row_increase++;


        String line2 = "The quick brown fox jumps over the lazy dog 2";
        String meaning2 = "A sentence 2";
        row_increase++;


        String line3 = "The quick brown fox jumps over the lazy dog 3";
        String meaning3 = "A sentence 3";
        row_increase++;

        String line4 = "jo aatmaa ko maarane vaalaa samajhataa hai owr jo isako maraa samajhataa hai ve donon hii nahiin jaanate hain, kyonki yah aatmaa n marataa hai owr n maaraa jaataa hai.";
        String meaning4 = "He who thinks that the soul kills, and he who thinks of it as killed, are both ignorant. The soul kills not, nor is it killed.";
        row_increase++;

        String line5 = "nainam chhindanti shastraaṇi nainam dahati paavakah. n chainam kledayantyaapo n shoshayati maarutah॥ ";
        String meaning5 = "Weapons do not cleave the soul, fire does not burn it, waters do not wet it, and wind does not dry it.";
        row_increase++;

        String line6 = "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.";
        String meaning6 = "We should never underestimate people.";
        row_increase++;

        String line7 = "Strange, isn’t it? Each man’s life touches so many other lives. When he isn’t around he leaves an awful hole, doesn’t he?";
        String meaning7 = "no man is a failure who has friends.";
        row_increase++;

        String line8 = "There should be no boundaries to human endeavor. We are all different. However bad life may seem, there is always something you can do, and succeed at. While there’s life, there is hope.";
        String meaning8 = "Every Human is special";
        row_increase++;

        String line9 = "There is no God. No one directs the universe.";
        String meaning9 = "No one directs our fate";
        row_increase++;

        String line10 = "Hope is a dangerous thing. Hope can drive a man insane.";
        String meaning10 = "Every passing moment makes you failure when you hope and it never happens whatever you have hoped.";
        row_increase++;

        String line11 = "It's the possibility of having a dream come true that makes life interesting.";
        String meaning11 = "Without possibility, life is meaningless.";
        row_increase++;

        String line12 = "Remember, love that doesn't include honesty doesn't deserve to be called love.";
        String meaning12 = "There should be honesty within lovers or it isn't love.";
        row_increase++;

        String line13 = "Whether a man is a legend or not is decided by history, not fortune tellers.";
        String meaning13 = "A man is made legend by this karma and not by his Fate.";
        row_increase++;

        String line14 = "A man becomes a Mahadev, only when he fights for good. A Mahadev is not born from his mother's womb. He is forged in the heat of battle, when he wages a war to destroy evil. Har Har Mahadev - All of us are Mahadev.";
        String meaning14 = "A man become a legend when he fights for good. He fights hard for people's right. He is a leader.";
        row_increase++;

        String line15 = "aahaarastvapi sarvasy trividho bhavati priyah. yajñastapastathaa daanam teshaan bhedamimam shrṛṇu.";
        String meaning15 = "The food also which is dear to each is threefold, as also sacrifice, austerity and almsgiving. Hear thou the distinction of these.";
        row_increase++;

        String line16 = "A wise man can learn more from his enemies than a fool from his friends.";
        String meaning16 = "People who are foolish will never be able to benefit from the friends he or she has.";
        row_increase++;


    //______________________________________________________________________________________________________________________________
    //______________________________________________________________________________________________________________________________



        //PRINTING TOTAL DATASET
        System.out.println("Total Dataset Added: " + row_increase);


    //______________________________________________________________________________________________________________________________
    //______________________________________________________________________________________________________________________________




        //ADDING DATASET TO RANDOM FUNCTION - OPERATE FUNCTION
        Random rd = new Random();//random dataset of grammar line
        int comp_input = rd.nextInt(row_increase); //taking input from the computer

        switch (comp_input) {
            case 0: { // if our random program generate zero
                System.out.println(comp_input + " No Line. " + line1 + "\n" + "Hinglish meaning of this line  : " + meaning1);
            }
            break;


            case 1: { // if our random program generate one
                System.out.println(comp_input + " No Line. " + line2 + "\n" + "Hinglish meaning of this line  : " + meaning2);
            }
            break;


            case 2: { // if our random program generate two
                System.out.println(comp_input + " No Line. " + line3 + "\n" + "Hinglish meaning of this line  : " + meaning3);
            }
            break;








      }
    }
}

