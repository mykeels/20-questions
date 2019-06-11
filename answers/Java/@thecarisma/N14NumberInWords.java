
import java.text.DecimalFormat;
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
//https://stackoverflow.com/a/3911987/6626422
public class N14NumberInWords {
    
    private static final String tenthNames[] = { "", " ten", " twenty", " thirty", " forty", " fifty",
                                                " sixty", " seventy", " eighty", " ninety" };

    private static final String[] numberNames = { "", " one", " two", " three", " four", " five", 
                                                " six", " seven", " eight", " nine", " ten", " eleven",
                                                " twelve", " thirteen", " fourteen", " fifteen", " sixteen",
                                                " seventeen", " eighteen", " nineteen" };

    private static String convertLessThanOneThousand(int number) {
        String soFar;

        if (number % 100 < 20){
            soFar = numberNames[number % 100];
            number /= 100;
        }
        else {
            soFar = numberNames[number % 10];
            number /= 10;

            soFar = tenthNames[number % 10] + soFar;
            number /= 10;
        }
        if (number == 0) return soFar;
        soFar = " and" + soFar ;
        return numberNames[number] + " hundred" + soFar;
    }


    public static void main(String[] args) {
        String numberStr, mask, tradBillions, tradMillions, tradHundredThousands, result, userInput;
        int number , billions, millions, hundredThousands, thousands ;
        Scanner scanner = new Scanner(System.in);
        DecimalFormat decimalFormat;
        
        System.out.printf("Enter a number: ");
        userInput = scanner.nextLine();
        number = Integer.parseInt(userInput);
        if (number == 0) {
            System.out.println("zero");
            return;
        } 
        numberStr = Long.toString(number);
        mask = "000000000000"; // pad with "0"
        decimalFormat = new DecimalFormat(mask);
        numberStr = decimalFormat.format(number);
        billions = Integer.parseInt(numberStr.substring(0,3));
        millions  = Integer.parseInt(numberStr.substring(3,6)); //nnnXXXnnnnnn
        hundredThousands = Integer.parseInt(numberStr.substring(6,9)); //nnnnnnXXXnnn
        thousands = Integer.parseInt(numberStr.substring(9,12)); //nnnnnnnnnXXX

        switch (billions) {
            case 0:
                tradBillions = "";
                break;
            case 1 :
                tradBillions = convertLessThanOneThousand(billions)
                + " billion ";
                break;
            default :
                tradBillions = convertLessThanOneThousand(billions)
                + " billion ";
        }
        result =  tradBillions;

        switch (millions) {
            case 0:
                tradMillions = "";
                break;
            case 1 :
                tradMillions = convertLessThanOneThousand(millions)
                + " million ";
                break;
            default :
                tradMillions = convertLessThanOneThousand(millions)
                + " million ";
        }
        result =  result + tradMillions;

        switch (hundredThousands) {
            case 0:
                tradHundredThousands = "";
                break;
            case 1 :
                tradHundredThousands = "one thousand ";
                break;
            default :
                tradHundredThousands = convertLessThanOneThousand(hundredThousands)
                + " thousand ";
        }
        result =  result + tradHundredThousands;

        String tradThousand;
        tradThousand = convertLessThanOneThousand(thousands);
        result =  result + tradThousand;

    
        System.out.println(result.replaceAll("^\\s+", "").replaceAll("\\b\\s{2,}\\b", " "));
  }
    
}
