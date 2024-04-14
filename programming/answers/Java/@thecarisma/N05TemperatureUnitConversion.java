
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
public class N05TemperatureUnitConversion {
    
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        boolean convertToCelsius = false;
        String input ;
        double value, finalValue ;
        
        System.out.printf("1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\n\nEnter an option: ");
        input = scanner.nextLine();
        if (input.equals("1")) {
            System.out.print("Enter a Celsius value: ");
        } else {
            convertToCelsius = true ;
            System.out.print("Enter a Fahrenheit value: ");
        }
        input = scanner.nextLine();
        try {
            value = Double.parseDouble(input);
            if (convertToCelsius) {
                finalValue = (value - 32) * 5/9 ;
                System.out.printf("%f°F is %f°C\n", value, finalValue);
            } else {
                finalValue = ((value * 9/5) + 32) ;
                System.out.printf("%f°C value is %f°F\n", value, finalValue);
            }
            
            
        } catch (NumberFormatException ex) {
            System.out.println("Invalid value input");
        }
    }
    
}
