use std::io;

fn main() {
    println!("Enter a word:");
    let mut word = String::new();

    io::stdin()
        .read_line(&mut word)
        .expect("Could not read line");

    word = word.trim().to_string();

    println!("The reverse of {} is {}", word, reverse(&word));
    
}

fn reverse(word: &String) -> String {
    let mut reversed_word = String::new();
    for character in word.chars().rev() {
        reversed_word.push(character);
    }
    reversed_word.trim().to_string()
}
