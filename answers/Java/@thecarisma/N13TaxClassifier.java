
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
public class N13TaxClassifier {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput ;
        double salary ;
        
        System.out.printf("Enter a salary amount: ");
        userInput = scanner.nextLine();
        salary = Long.parseLong(userInput);
        if (salary < 50000) {
            System.out.printf("Tax: %f\n", ((5 / 100.0) * salary));
        } else if (salary < 200000) {
            System.out.printf("Tax: %f\n", ((10 / 100.0) * salary));
        } else {
            System.out.printf("Tax: %f\n", ((15 / 100.0) * salary));
        }
    }
    
}
