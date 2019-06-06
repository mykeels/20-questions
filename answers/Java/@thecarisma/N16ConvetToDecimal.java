
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
public class N16ConvetToDecimal {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n, value;
        String userInput ;
        
        System.out.print("Enter the base n value: ");
        userInput = scanner.nextLine();
        n = Integer.parseInt(userInput);
        
        System.out.print("Enter the Number you wish to convert: ");
        userInput = scanner.nextLine();
        value = Integer.parseInt(userInput);
        
        System.out.printf("%d in base %d is %s in base 10\n", value, n, Integer.toString(value, n));        
    }
    
}
