use rand::Rng;
use std::io;

fn main() {
    
    println!("Press any key");

    let mut line = String::new();
    io::stdin()
        .read_line(&mut line)
        .expect("Failed to read line");

    let a = rand::thread_rng().gen_range(0, 10);
    let b = rand::thread_rng().gen_range(0, 10);
    let c = rand::thread_rng().gen_range(0, 10);

    if a == 7 || b == 7 || c == 7 {
        println!("Congratulations!");
    } else {
        println!("Try again! Better luck next time.");
    }
    
}
