
import java.util.Random;


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
public class N10HexColorGenerator {
    
    public static void main(String[] args) {
        Random random = new Random();
        System.out.printf("#%s%s%s", 
                Integer.toHexString(random.nextInt(256)), 
                Integer.toHexString(random.nextInt(256)), 
                Integer.toHexString(random.nextInt(256)));
    }
    
}
