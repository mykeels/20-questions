extern crate rand;

use std::io;
use rand::{thread_rng, Rng};
use rand::distributions::Alphanumeric;


fn main() {
    
    let word: String = generate_random_word();
    println!("{}", word);
    println!("Type the word in reverse");

    let mut user_input = String::new();
    io::stdin()
        .read_line(&mut user_input)
        .expect("Failed to read line");

    user_input = user_input.trim().to_string();

    if user_input.to_lowercase() == reverse(&word).to_lowercase() {
        println!("✅");
    } else {
        println!("❌");
    }

}

fn generate_random_word() -> String {
    let mut rng = rand::thread_rng();
    let rand_string: String = thread_rng()
        .sample_iter(&Alphanumeric)
        .take(rng.gen_range(3, 15))
        .collect();

    rand_string
}

fn reverse(word: &String) -> String {
    let mut reversed_word = String::new();
    for character in word.chars().rev() {
        reversed_word.push(character);
    }
    reversed_word.trim().to_string()
}
