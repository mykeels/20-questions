
import java.io.BufferedReader;
import java.io.FileNotFoundException;
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
public class N18SimpleCGPACalculator {
    
    public static void main(String[] args) throws FileNotFoundException, IOException {
        int x, averageScore = 0, totalCGPA = 0  ;
        String field[] ;
        try (BufferedReader br = new BufferedReader(new FileReader("./data/N18SimpleCGPACalculator.csv"))) {
            String line;
            br.readLine();
            while ((line = br.readLine()) != null) {
                field = line.split(",");
                for (x = 2; x < field.length; x++) {
                    averageScore += Integer.parseInt(field[x]);
                    totalCGPA += Integer.parseInt(field[x]) / 20;
                }
                averageScore /= (field.length - 2);
                totalCGPA /= (field.length - 2);
                System.out.printf("%s (%s): %d %s\n", field[1], field[0], averageScore, totalCGPA);
            }
        }
    }
    
}
