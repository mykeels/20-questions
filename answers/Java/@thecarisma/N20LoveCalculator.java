
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
public class N20LoveCalculator {
    
    public static void main(String[] args){
        String firstPerson, secondPerson, concatedNames, concatedNamesValue = "", percentage = "";
        Scanner scanner = new Scanner(System.in);
        int occurence, x, y, xValue, yValue, middle;
        
        System.out.printf("Enter First Person name: ");
        firstPerson = scanner.nextLine();        
        System.out.printf("Enter Second Person name: ");
        secondPerson = scanner.nextLine();
        concatedNames = firstPerson.toLowerCase() + "loves" + secondPerson.toLowerCase();
        
        for (char c : concatedNames.toCharArray()) {
            occurence = concatedNames.length() - concatedNames.replace(""+c, "").length();
            concatedNamesValue += ""+occurence;
        }
        percentage = concatedNamesValue;
        
        while (percentage.length() > 2) {
            concatedNamesValue = percentage;
            middle = concatedNamesValue.length() / 2 ;
            percentage = "" ;
            for (x = 0, y = concatedNamesValue.length() - 1; x < concatedNamesValue.length() && y >= 0; x++, y--) {
                xValue = Integer.parseInt(""+concatedNamesValue.toCharArray()[x]);
                yValue = Integer.parseInt(""+concatedNamesValue.toCharArray()[y]);
                if (x == middle) {
                    if ((concatedNamesValue.length()%2) == 0) break;
                    y = 0;
                    yValue = 0 ;
                }
                percentage += (xValue + yValue); 
            }
        }
        System.out.println("The love percentage is " + percentage + "%");
        
    }
    
}
