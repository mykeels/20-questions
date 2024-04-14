
import java.util.Random;
import java.util.Scanner;

/*
 * The MIT License
 *
 * Copyright 2019 Azeez Adewale <azeezadewale98@gmail.com>.
 *
 */

/**
 *
 * @author Azeez Adewale <azeezadewale98@gmail.com>
 */
public class N04TypeInReverse {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String word, userInput ;
        
        while (true) {
            word = getRandomWord();
            System.out.printf("Type the word '%s' in reverse: ", word);
            userInput = scanner.nextLine();
            if (userInput.equals(reverseWord(word))) 
                System.out.println("\u2705");
            else
                System.out.println("\u274C");
        }
    }
    
    //small alpahbet is between 97 to 122 in the ascii table
    private static String getRandomWord(){
        String string = "";
        int length, a ;
        Random random = new Random();
        
        length = random.nextInt(15 - 7) + 7;
        for (a = 0; a < length; a++)
            string += (char) (random.nextInt(122 - 97) + 97 );
        return string;
    }
    
    private static String reverseWord(String word){
        String string = "";
        int a;
        for (a = word.length() - 1; a >= 0; a--) {
            string += word.toCharArray()[a];
        }
        return string;
    }
    
}
