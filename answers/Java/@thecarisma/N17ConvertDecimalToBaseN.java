
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
public class N17ConvertDecimalToBaseN {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String userInput ;
        int n;
        
        System.out.print("Enter the base n value: ");
        userInput = scanner.nextLine();
        n = Integer.parseInt(userInput);
        
        System.out.print("Enter the Number you wish to convert: ");
        userInput = scanner.nextLine();
        
        System.out.printf("%s in base 10 is %s in base %d\n", userInput, Integer.parseInt(userInput, n), n);   
    }
    
}
