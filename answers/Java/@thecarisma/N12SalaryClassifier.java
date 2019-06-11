
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
public class N12SalaryClassifier {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput ;
        long salary ;
        
        System.out.printf("Enter a salary amount: ");
        userInput = scanner.nextLine();
        salary = Long.parseLong(userInput);
        if (salary < 50000) {
            System.out.println("Basic Earner");
        } else if (salary < 200000) {
            System.out.println("Mid Earner");
        } else {
            System.out.println("High Earner");
        }
    }
    
}
