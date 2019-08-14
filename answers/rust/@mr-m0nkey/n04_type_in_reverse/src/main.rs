use std::io;

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
    unimplemented!();//TODO implement
}

fn reverse(word: &String) -> String {
    let mut reversed_word = String::new();
    for character in word.chars().rev() {
        reversed_word.push(character);
    }
    reversed_word.trim().to_string()
}
