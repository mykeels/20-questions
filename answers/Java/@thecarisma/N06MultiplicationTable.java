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
public class N06MultiplicationTable {
    
    public static void main(String[] args){
        for (int a = 1; a <= 12; a++) {
            for (int b = 2; b <= 12; b++) {
                System.out.print((a*b) + "\t");
            }
            System.out.println();
        }
    }
    
}
