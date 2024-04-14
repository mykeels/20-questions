
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
public class N16ConvertToDecimal {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String userInput, value ;
        int n;
        
        System.out.print("Enter the base n value: ");
        userInput = scanner.nextLine();
        n = Integer.parseInt(userInput);
        
        System.out.print("Enter the Number you wish to convert: ");
        value = scanner.nextLine();
        
        System.out.printf("%s base %d is %s base 10\n", value, n, convertToDecimal(value, n));        
    }
    
    public static int convertToDecimal(String str, int base) {
        int v = 0;
        int total = 0;
        int pow = 0;
        str = str.toUpperCase();
        for (int i = str.length() - 1; i >= 0; i--) {
            char c = str.charAt(i);
            if (c >= '0' && c <= '9')
                v = c - '0';
            else if (c >= 'A' && c <= 'Z')
                v = 10 + (c - 'A');
            total += v * Math.pow(base, pow);
            pow++;
        }
        return total;
    }
    
}
