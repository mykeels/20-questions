
import java.util.ArrayList;
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
        
        System.out.printf("%s base %d is %s base 10\n", decimalToBaseN(Integer.parseInt(userInput), n), n, userInput);   
    }
    
    private static String decimalToBaseN(int number, int base) {
        ArrayList<Integer> result = new ArrayList<>(); 
        boolean finish = false;
        int remainder = 0;
        String returnValue = "";
 
        while (!finish) {
            if (number == 0) {
                finish = true;
            } else {
                remainder = number % base;
                number = number / base;
                result.add(remainder);
            }
            remainder = 0;
        }
        for (int i = result.size()-1; i >=0 ; i--) {
            int a = result.get(i);
            returnValue += (a);
        }
        return returnValue;
    }
    
}
