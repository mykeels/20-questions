
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
public class N09RGBColorGenerator {
    
    public static void main(String[] args) {
        Random random = new Random();
        System.out.printf("rgb(%d,%d,%d)", random.nextInt(256), random.nextInt(256), random.nextInt(256));
    }
    
}
