
import java.io.IOException;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

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
        while (true) {
            try {
                Random random = new Random();
                int a, b, c ;

                System.out.print("Press Enter key to conitue...");
                System.in.read();
                a = random.nextInt(10);
                b = random.nextInt(10);
                c = random.nextInt(10);
                System.out.printf("%d %d %d : ", a, b, c);
                if ( a == 7 || b == 7 || c == 7)
                    System.out.println("Congratulations!");
                else
                    System.out.println("Try again! Better luck next time.");
            } catch (IOException ex) {
                Logger.getLogger(N02Lottery.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
}
