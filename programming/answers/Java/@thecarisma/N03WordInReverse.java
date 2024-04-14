
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
public class N03WordInReverse {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String word;
        int a;
        
        while (true) {
            System.out.print("Enter a word: ");
            word = scanner.nextLine();
            for (a = word.length() - 1; a >= 0; a--) {
                System.out.print(word.toCharArray()[a]);
            }
            System.out.println();
        }
    }
    
}
