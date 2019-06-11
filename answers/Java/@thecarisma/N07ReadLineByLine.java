
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
public class N07ReadLineByLine {
    
    public static void main(String[] args) throws IOException{
        try (BufferedReader br = new BufferedReader(new FileReader("./data/N07ReadLineByLine.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        }
    }
    
}
