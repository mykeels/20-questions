
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
public class N02Lottery {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int a, b, c ;
        while (true) {
            System.out.print("Press Enter key to conitue...");
            scanner.nextLine();
            a = random.nextInt(10);
            b = random.nextInt(10);
            c = random.nextInt(10);
            System.out.printf("%d %d %d : ", a, b, c);
            if ( a == 7 || b == 7 || c == 7)
                System.out.println("Congratulations!");
            else
                System.out.println("Try again! Better luck next time.");
        }
    }
    
}
