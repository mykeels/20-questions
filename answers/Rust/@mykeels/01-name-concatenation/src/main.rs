use std::io;
use std::io::Write;
use std::str;

fn main() {
    let first_name = request_personal_info("first name");
    let last_name = request_personal_info("last name");
    println!(
        "Hello, {} {}", 
        first_name.as_deref().unwrap_or("").trim_end(), 
        last_name.as_deref().unwrap_or("").trim_end()
    );
}

fn request_personal_info(info: &str) -> Option<String> {
    print!("What is your {}: ", &info);
    io::stdout().flush().unwrap();
    return read_input();
}

fn read_input() -> Option<String> {
    let mut buffer = String::new();
    let stdin = io::stdin();
    stdin.read_line(&mut buffer).ok()?;
    return Some(buffer);
}
