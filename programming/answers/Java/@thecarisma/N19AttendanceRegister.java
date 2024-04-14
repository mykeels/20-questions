
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
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
public class N19AttendanceRegister {
    
    public static void main(String[] args) throws FileNotFoundException, IOException {
        Scanner scanner = new Scanner(System.in);
        String userInput ;
        
        try (BufferedReader br = new BufferedReader(new FileReader("./data/N19AttendanceRegister.txt"))) {
            String line;
            br.mark(1000);
            while ((line = br.readLine()) != null) {
                System.out.printf("Is %s in class? [yes/no]: ", line);
                userInput = scanner.nextLine();
                
                if (!userInput.equals("yes") && !userInput.equals("no")) {
                    br.reset();
                }
                br.mark(0); //if this go before reset the logic breaks
            }
        }
    }
    
}
