
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
public class N15CompoundInterestCalculator {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        double principal, rate, interest;
        int timeInYear, x;
        String userInput ;
        
        System.out.print("Enter the Principal: ");
        userInput = scanner.nextLine();
        principal = Double.parseDouble(userInput);
        
        System.out.print("Enter the Rate: ");
        userInput = scanner.nextLine();
        rate = Double.parseDouble(userInput);
        
        System.out.print("Enter the Time in Year: ");
        userInput = scanner.nextLine();
        timeInYear = Integer.parseInt(userInput);
        
        System.out.printf("The Simple Interest: %f\n", (principal * rate * timeInYear / 100));
        for (x = 1; x <= timeInYear; x++) {
            interest = (principal * rate / 100) ;
            System.out.printf("The Compound Interest of Year %d: %f\n", x, interest);
            principal += interest;
        }
    }
    
}
