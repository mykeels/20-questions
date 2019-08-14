use std::io;

fn main() {
    println!("What is your first name?");

    let mut first_name = String::new();
    io::stdin()
        .read_line(&mut first_name)
        .expect("Failed to read line");
    
    first_name = first_name.trim().to_string();

    println!("What is your last name?");

    let mut last_name = String::new();
    io::stdin()
        .read_line(&mut last_name)
        .expect("Failed to read line");
    last_name = last_name.trim().to_string();

    println!("How old are you?");
    let mut age = String::new();
    io::stdin()
        .read_line(&mut age)
        .expect("Failed to read line");

    let age: u32 = age.trim().parse()
        .expect("Please type a number!");

    println!("Welcome, {} {} ({})", first_name, last_name, age);

}
