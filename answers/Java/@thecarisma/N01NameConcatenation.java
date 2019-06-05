
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
public class N01NameConcatenation {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String firstName, lastName;
        int age;
        
        System.out.print("Enter your first name: ");
        firstName = scanner.nextLine();
        
        System.out.print("Enter your last name: ");
        lastName = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        age = scanner.nextInt();
        
        System.out.printf("Welcome, %s %s (%d)\n", firstName, lastName, age);
    }
    
}
