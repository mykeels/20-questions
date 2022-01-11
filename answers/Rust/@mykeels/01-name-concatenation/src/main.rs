use chrono::Datelike;
use std::io;
use std::io::Write;
use std::str;

fn main() {
    let first_name = request_personal_info("first name");
    let last_name = request_personal_info("last name");
    let current_year = get_current_year();
    let birth_year = request_personal_info("birth year");
    let age: i32 = birth_year
            .as_deref()
            .unwrap_or("0")
            .trim_end()
            .parse()
            .unwrap();
    println!(
        "Hello, {} {} {}",
        first_name.as_deref().unwrap_or("").trim_end(),
        last_name.as_deref().unwrap_or("").trim_end(),
        current_year - age
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

fn get_current_year() -> i32 {
    let current_date = chrono::Utc::now();
    return current_date.year();
}
