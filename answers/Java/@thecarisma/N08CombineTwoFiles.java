
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

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
public class N08CombineTwoFiles {
    
    public static void main(String[] args) throws IOException{
        try (BufferedReader br = new BufferedReader(new FileReader("./data/N08CombineTwoFiles1.txt"))) {
            BufferedReader br2 = new BufferedReader(new FileReader("./data/N08CombineTwoFiles2.txt"));
            String line, line2;
            while (((line = br.readLine()) != null) && ((line2 = br2.readLine()) != null)) {
                System.out.println(line + " " + line2);
            }
        }
    }
    
}
