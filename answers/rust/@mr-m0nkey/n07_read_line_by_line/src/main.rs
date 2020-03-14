use std::env;
use std::fs;

fn main() {

let args: Vec<String> = env::args().collect();
    let file_name = match args.len() {
        0 | 1 => {
            panic!("invalid argument length");
        }
        _ => args.get(1).unwrap(),
    };

    let contents = fs::read_to_string(file_name)
        .expect("Something went wrong reading the file");

    for line in contents.lines() {
        println!("{}", line);
    }


}