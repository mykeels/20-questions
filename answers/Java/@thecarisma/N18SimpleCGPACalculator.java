
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
        float averageScore = 0.0f, totalCGPA = 0.0f  ;
        String field[] ;
        int x; 
        try (BufferedReader br = new BufferedReader(new FileReader("./data/N18SimpleCGPACalculator.csv"))) {
            String line;
            br.readLine();
            while ((line = br.readLine()) != null) {
                field = line.split(",");
                for (x = 2; x < field.length; x++) {
                    averageScore += Float.parseFloat(field[x]);
                    totalCGPA = Float.parseFloat(field[x]) / 20;
                }
                averageScore /= (field.length - 2);
                totalCGPA /= (field.length - 2);
                System.out.printf("%s (%s): %f %s\n", field[1], field[0], averageScore, totalCGPA);
            }
        }
    }
    
}
