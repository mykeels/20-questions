use std::io;

fn main() {

println!("1. Celsius to Fahrenheit");
println!("2. Fahrenheit to Celsius");
let should_convert_to_celcius: bool = should_convert_to_celcius();
let mut value = String::new();
let result: f64;

if should_convert_to_celcius {
    println!("Enter a Fahrenheit value:");
    io::stdin()
            .read_line(&mut value)
            .expect("Failed to read line");

    let value: f64 = value.trim().parse()
        .expect("Please type a number!");

    result = convert_to_celcius(value);
    
} else {
    println!("Enter a celsius value:");
    io::stdin()
            .read_line(&mut value)
            .expect("Failed to read line");
    
    let value: f64 = value.trim().parse()
        .expect("Please type a number!");

    result = convert_to_fahrenheit(value);

}

println!("The result is {}", result);

    
    
}


fn convert_to_fahrenheit(value: f64) -> f64 {
    (value * 9.0/5.0) + 32.0
}

fn convert_to_celcius(value: f64) -> f64 {
    (value - 32.0) * 5.0/9.0
}


fn should_convert_to_celcius() -> bool {
    let mut option = String::new();

    while option != "1" && option != "2" {
        option = String::new();
        println!("Enter an option:");

        io::stdin()
            .read_line(&mut option)
            .expect("Failed to read line");
            
        option = option.trim().to_string();
    }

    if option == "2" {
        return true;
    } else {
        return false;
    }
    

}