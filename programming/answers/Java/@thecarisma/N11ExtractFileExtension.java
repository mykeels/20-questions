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
public class N11ExtractFileExtension {
    
    public static void main(String[] args) {
        String filePaths[] = {
            "C:\\Users\\thecarisma\\Documents\\NetBeansProjects\\VEC Manager\\src\\vec\\manager\\Main.java",
            "C:\\Users\\thecarisma\\Documents\\NetBeansProjects\\LiteEmployer\\src\\liteemployer\\LiteEmployer.form",
            "C:\\Users\\thecarisma\\Music\\MICHEAL JACKSON\\Michael Jackson - Rock With You.mp3",
            "C:\\Users\\thecarisma\\Documents\\THECARISMA_GITHUB\\20-questions\\answers\\Java\\@thecarisma\\data\\N08CombineTwoFiles1.txt",
            "C:\\Users\\thecarisma\\Videos\\LEGO\\2\\The_.Lego_Movie_2_The_Second_Part__(2019)_BluRay_high_(fzmovies.net).mp4"
        };
        for (String filePath : filePaths) {
            System.out.println(filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length()));
        }
    }
    
}
